import Image from "next/image";
import BetterLink from "../BetterLink";
import { BoxCard } from "./styles";

type Props = {
    product: any;
};

const ItemCard = ({ product }: Props) => {
    const { imageURL, name, brand, id, created_at, amount, category } = product;

    return (
        <BoxCard>
            <BetterLink href={`/collections/${id}`}>
                <Image
                    src={imageURL}
                    width={320}
                    height={275}
                    layout="responsive"
                    priority
                />
                <div className="info">
                    <div className="brand">{brand}</div>
                    <div className="name">{name}</div>
                    <div className="amount">Amount: {amount}</div>
                </div>
            </BetterLink>
        </BoxCard>
    );
};

export default ItemCard;
