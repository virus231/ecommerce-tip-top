import styled from "styled-components";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks/useAuth";
import OutsideClickHandler from "react-outside-click-handler";
import BetterLink from "@/components/BetterLink";

const Div = styled.div`
    border: 1px #eee solid;
    background-color: white;
    padding: 6px 0;
    border-radius: 6px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
    position: absolute;
    top: calc(100% + 3px);
    right: -6px;
    z-index: 10;
    font-size: 14px;
    width: 250px;

    .special {
        padding: 8px 58px 8px 16px;

        p:first-child {
            font-weight: 600;
        }

        p:nth-child(2) {
            margin-top: 4px;
        }

        .sign {
            display: inline-block;
            border: 1px #4a00e0 solid;
            border-radius: 6px;
            color: #4a00e0;
            padding: 4px 12px;
            margin: 10px 0 6px 0;
            cursor: pointer;
        }
    }

    .divider {
        border-bottom: 1px #eee solid;
        margin: 6px 0;
    }

    .item {
        padding: 8px 16px;
        cursor: pointer;

        &:active {
            background-color: #f4f4f4;
        }
    }
`;

type Props = {
    onClose: () => void;
    onSignOut: () => void;
};

const Menu = ({ onClose, onSignOut }: Props) => {
    const router = useRouter();
    const auth = useAuth();

    // const user = useSelector((state) => state.auth.user);

    const signInHandler = () => {
        router.push(`/signin`);
        onClose();
    };

    const collectionsHandler = () => {
        router.push(`/collections`);
        onClose();
    };

    const wishlistHandler = () => {
        router.push(`/wishlist`);
        onClose();
    };

    const cartHandler = () => {
        router.push(`/cart`);
        onClose();
    };

    return (
        <Div>
            <OutsideClickHandler onOutsideClick={onClose}>
                <div className="special">
                    {auth?.session ? (
                        <>
                            <p>Hello</p>
                            <p>{auth.user?.email}</p>
                        </>
                    ) : (
                        <>
                            <p>Welcome</p>
                            <p>To access wishlist or cart</p>
                            <div className="sign" onClick={signInHandler}>
                                Sign In
                            </div>
                        </>
                    )}
                </div>
                <div className="divider"></div>
                {/*{*/}
                {/*  menuConfig.map((menu) => (*/}
                {/*    <>*/}
                {/*      {menu.protected && auth?.isAuthenticated && <div className="item" onClick={() => handleClick(menu)}>*/}
                {/*        <BetterLink href={menu.path}>*/}
                {/*          {menu.title}*/}
                {/*        </BetterLink>*/}
                {/*      </div>}*/}
                {/*      /!*{!menu.protected && <div className="item" onClick={() => handleClick(menu)}>*!/*/}
                {/*      /!*  <BetterLink href={menu.path}>*!/*/}
                {/*      /!*    {menu.title}*!/*/}
                {/*      /!*  </BetterLink>*!/*/}
                {/*      /!*</div>}*!/*/}
                {/*    </>*/}
                {/*  ))*/}
                {/*}*/}
                <div className="item" onClick={collectionsHandler}>
                    Collections
                </div>
                <div className="item" onClick={wishlistHandler}>
                    Wishlist
                </div>
                {/*<div className="item" onClick={cartHandler}>*/}
                {/*    Cart*/}
                {/*</div>*/}
                <BetterLink href="/profile">
                    <div className="item" onClick={onClose}>
                        Profile
                    </div>
                </BetterLink>
                {auth?.session && (
                    <div className="item" onClick={onSignOut}>
                        Sign Out
                    </div>
                )}
            </OutsideClickHandler>
        </Div>
    );
};

export default Menu;
