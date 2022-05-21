import { supabase } from "@/services/supabase-config";
import { Div, MainNav } from "@/styles/ProductPage";
import { GetStaticPaths, GetStaticProps, NextPageContext } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@mantine/core";
import { useWishlistStore } from "@/store";
import { fDate } from "@/utils/formatTime";

const ProductDetailsPage = ({ collection }: any) => {
    const addToWishlist = useWishlistStore((state) => state.addToWishlist);
    const wishlists = useWishlistStore((state) => state.wishlists);

    const { imageURL, name, brand, id, created_at, amount, category } =
        collection;

    const isWishlisted = !!wishlists.find((value) => value.id === id);

    const addToWishlistHandler = () => {
        addToWishlist(collection);
    };

    return (
        <>
            <MainNav>
                <Link href="/">Home</Link>
                {` / `}
                <Link href="/collections">Collections</Link>
                {` / `}
                <span>{` ${brand} ${name}`}</span>
            </MainNav>
            <Div>
                <div className="card">
                    <div className="image">
                        <Image
                            src={imageURL}
                            width={430}
                            height={412}
                            layout="responsive"
                            alt="Image"
                        />
                    </div>
                    <div className="info">
                        <div className="brand">Brand: {brand}</div>
                        <div className="name">Name: {name}</div>
                        <div className="amount">Amount: {amount}</div>
                        <div>Create: {fDate(created_at)}</div>
                        <div className="size-box">
                            <div className="head">
                                <div className="title">Select Size</div>
                                {/*<div className="chart" onClick={openSizeChartHandler}>*/}
                                {/*  Size Chart*/}
                                {/*</div>*/}
                            </div>
                            {/*{promptSize && <div className="error">Please select a size</div>}*/}
                            <div className="sizes">
                                {/*  {category === 'Jeans' ? (*/}
                                {/*    <SizePickerForBottoms*/}
                                {/*      currentSize={size}*/}
                                {/*      onSetSize={setSize}*/}
                                {/*    />*/}
                                {/*  ) : (*/}
                                {/*    <SizePickerForTops currentSize={size} onSetSize={setSize} />*/}
                                {/*  )}*/}
                                {/*</div>*/}
                            </div>
                            <div className="actions">
                                <Button
                                    variant="gradient"
                                    gradient={{
                                        from: `teal`,
                                        to: `lime`,
                                        deg: 105,
                                    }}
                                    mr={10}
                                    onClick={addToWishlistHandler}
                                    disabled={isWishlisted}
                                >
                                    {isWishlisted ? `Wishlisted` : `Wishlist`}
                                </Button>
                                <Button
                                    variant="gradient"
                                    gradient={{
                                        from: `teal`,
                                        to: `blue`,
                                        deg: 60,
                                    }}
                                >
                                    Add to Cart
                                </Button>
                                {/*<button*/}
                                {/*  className="wishlist"*/}
                                {/*  onClick={addToWishlistHandler}*/}
                                {/*  disabled={isWishlisted}*/}
                                {/*>*/}
                                {/*  {isWishlisted ? 'Wishlisted' : 'Wishlist'}*/}
                                {/*</button>*/}
                                {/*<button*/}
                                {/*  className="cart"*/}
                                {/*  onClick={addToCartHandler}*/}
                                {/*  disabled={isLoading}*/}
                                {/*>*/}
                                {/*  {isLoading ? <span className="loader"></span> : 'Add to Cart'}*/}
                                {/*</button>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </Div>
        </>
    );
};

const getStaticPaths: GetStaticPaths = async () => {
    const { data: collections } = await supabase
        .from(`collections`)
        .select(`id`);

    const paths = (collections || []).map(({ id }) => ({
        params: {
            id: id.toString(),
        },
    }));

    return {
        paths,
        fallback: false,
    };
};

ProductDetailsPage.getInitialProps = async (context: NextPageContext) => {
    const id = context.query.id;

    const { data: collection } = await supabase
        .from(`collections`)
        .select(`*`)
        .eq(`id`, id)
        .single();

    return {
        collection,
    };
};

export default ProductDetailsPage;
