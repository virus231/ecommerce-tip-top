import { Div, MainNav } from "@/styles/Collections";
import { useWishlistStore } from "@/store";
import Head from "next/head";
import Link from "next/link";
import { WishlistItemCard } from "@/components/Wishlist/WishlistItemCard";
import { Center } from "@mantine/core";

const WishListPage = () => {
    const wishlists = useWishlistStore((state) => state.wishlists);

    return (
        <>
            <Head>
                <title>Wishlist</title>
            </Head>
            <MainNav>
                <Link href="/">Home</Link> / <span>Wishlist</span>
            </MainNav>
            <Div>
                <main className="main">
                    <div className="top">
                        <div className="title">
                            <Center>Collections</Center>
                        </div>
                    </div>
                    <div className="clothes">
                        {wishlists.map((item) => (
                            <WishlistItemCard key={item.id} item={item} />
                        ))}
                    </div>
                </main>
            </Div>
        </>
    );
};

export default WishListPage;
