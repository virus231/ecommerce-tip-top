import Link from "next/link";
import { ReactNode } from "react";

type Props = {
    href: string;
    children: ReactNode;
};

const BetterLink = ({ href, children }: Props) => {
    return (
        <Link href={href}>
            <a>{children}</a>
        </Link>
    );
};

export default BetterLink;
