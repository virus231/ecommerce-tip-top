import { useState } from "react";
import { CartIcon, LogoIcon, UserIcon, WishlistIcon } from "@/public/icons";
import BetterLink from "@/components/BetterLink";
import styled from "styled-components";
import Menu from "../DropDownMenu";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import useHover from "@/hooks/useHover";
import { useWishlistStore } from "@/store";

export const Div = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    padding: 0 16px;
    position: relative;

    .title {
        margin: 16px 0;
        display: flex;
        justify-content: center;
        align-items: center;

        a {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 8px;
            text-decoration: none;
            color: inherit;

            .icon {
                filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.1));
            }

            p {
                font-size: 24px;
                font-weight: 500;
                margin-left: 8px;
            }
        }
    }

    .box {
        display: flex;
        align-items: stretch;

        .nav-items {
            list-style-type: none;
            color: inherit;
            display: flex;
            align-items: center;

            .nav-item {
                display: flex;
                align-items: center;
                padding: 8px;
                position: relative;

                &:first-child {
                    margin-right: 8px;
                }

                a {
                    text-decoration: none;
                    color: inherit;

                    .badge {
                        font-size: 10px;
                        font-weight: 600;
                        background-color: #4a00e0;
                        color: white;
                        border-radius: 50%;
                        width: 18px;
                        height: 18px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: absolute;
                        top: -2px;
                        right: -2px;
                        z-index: 10;

                        @media (max-width: 640px) {
                            width: 16px;
                            height: 16px;
                        }
                    }
                }
            }
        }

        .user-nav {
            border-top: 3px transparent solid;
            border-bottom: 3px transparent solid;
            display: flex;
            position: relative;

            button {
                background-color: white;
                border: none;
                padding: 16px;
            }

            &.active {
                border-bottom-color: #4a00e0;
            }
        }
    }

    @media (max-width: 640px) {
        .title {
            a {
                padding: 0;

                .icon {
                    width: 38px;
                }

                p {
                    font-size: 22px;
                }
            }
        }

        .box {
            .nav-items {
                .nav-item {
                    padding: 6px;
                }
            }

            .user-nav {
                button {
                    padding: 10px;
                }
            }
        }
    }
`;

export const NavBar = () => {
    const auth = useAuth();
    const router = useRouter();
    const [hoverRef, isHovered] = useHover<HTMLDivElement>();
    const wishlistCount = useWishlistStore((state) => state.wishlists.length);

    const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

    const closeMenu = () => {
        setIsMenuVisible(false);
    };

    const signOutHandler = async () => {
        await auth?.logout();
        await router.push(`/signin`);
    };

    return (
        <Div>
            <h1 className="title">
                <BetterLink href="/">
                    <LogoIcon />
                    <p>tiptop</p>
                </BetterLink>
            </h1>
            <div className="box">
                <ul className="nav-items">
                    <li className="nav-item">
                        <BetterLink href="/wishlist">
                            <WishlistIcon />
                            {wishlistCount > 0 && (
                                <span className="badge">{wishlistCount}</span>
                            )}
                        </BetterLink>
                    </li>
                    <li className="nav-item">
                        <BetterLink href="/cart">
                            <CartIcon />
                            {/*{cartCount > 0 && <span className="badge">{cartCount}</span>}*/}
                        </BetterLink>
                    </li>
                </ul>
                <div
                    ref={hoverRef}
                    className={`user-nav ${isMenuVisible ? `active` : ``}`}
                >
                    <button>
                        <UserIcon />
                    </button>
                    {isHovered && (
                        <Menu onClose={closeMenu} onSignOut={signOutHandler} />
                    )}
                </div>
            </div>
        </Div>
    );
};
