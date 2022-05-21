import { WishlistCard } from "@/components/Wishlist/WishlistItemCardStyles";
import { CloseIcon } from "@/public/icons";
import BetterLink from "../BetterLink";
import Image from "next/image";
import { IProduct } from "@/@types/products";
import { useWishlistStore } from "@/store";

type Props = {
    item: IProduct;
};

export const WishlistItemCard = ({ item }: Props) => {
    const removeProduct = useWishlistStore((state) => state.removeProduct);

    const { brand, name, amount, imageURL, id } = item;

    return (
        <>
            <WishlistCard>
                <div className="item">
                    <button
                        className="delete"
                        onClick={() => removeProduct(id)}
                    >
                        <CloseIcon />
                    </button>
                    <BetterLink href={`/collections/${id}`}>
                        <Image
                            src={imageURL}
                            width={220}
                            height={275}
                            layout="responsive"
                        />
                    </BetterLink>
                    <div className="info">
                        <div className="brand">{brand}</div>
                        <div className="name">{name}</div>
                        <div className="amount">{amount}</div>
                    </div>
                </div>
                <button className="cart">Move to Cart</button>
            </WishlistCard>
        </>
    );
};
