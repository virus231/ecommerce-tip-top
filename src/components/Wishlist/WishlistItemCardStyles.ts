import styled from "styled-components";

export const WishlistCard = styled.div`
    font-size: 14px;
    border: 1px #eee solid;

    .item {
        position: relative;

        .delete {
            border: 1px #ddd solid;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 2px;
            position: absolute;
            top: 8px;
            right: 8px;
            z-index: 5;
            background-color: #f4f4f4;
            color: #888;
            cursor: pointer;

            .icon {
                width: 16px;
                height: 16px;
                stroke-width: 2px;
            }
        }

        a {
            text-decoration: none;
            color: inherit;
        }

        .info {
            padding: 8px;

            .brand {
                font-weight: 500;
            }

            .name {
                color: #777;
                margin: 8px 0;
            }

            .amount {
                font-weight: 500;
            }
        }
    }

    .cart {
        font: inherit;
        font-weight: 500;
        background-color: white;
        color: #4a00e0;
        display: block;
        outline: none;
        cursor: pointer;
        border: none;
        border-top: 1px #eee solid;
        padding: 8px;
        width: 100%;
    }
`;

export const ModalDiv = styled.div`
    padding: 16px;

    .title {
        color: #4a00e0;
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 32px;
    }

    .error {
        margin-bottom: 16px;
        color: #ff4646;
    }

    .sizes {
        display: flex;

        button {
            font: inherit;
            font-size: 14px;
            font-weight: 500;
            border: 1px #ddd solid;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 50px;
            margin-right: 8px;
            background-color: white;
            cursor: pointer;

            &.active {
                border-color: #4a00e0;
                color: #4a00e0;
            }

            &:last-child {
                margin-right: 0;
            }

            @media (hover: hover) {
                transition: border 240ms;

                &:hover {
                    border-color: #4a00e0;
                }
            }
        }
    }

    .done {
        font: inherit;
        border-radius: 6px;
        background: #8e2de2;
        background: -webkit-linear-gradient(to right, #8e2de2, #4a00e0);
        background: linear-gradient(to right, #8e2de2, #4a00e0);
        color: white;
        font-weight: 500;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-top: 32px;
        outline: none;
        cursor: pointer;
        padding: 14px 28px;
        border: none;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
`;
