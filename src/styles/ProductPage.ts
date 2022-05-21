import styled, { keyframes } from "styled-components";

export const MainNav = styled.div`
    font-size: 14px;
    background-color: #f4f4f4;
    padding: 16px;
    text-align: center;

    a {
        text-decoration: none;
        color: inherit;
    }

    span {
        color: #999;
    }
`;

export const rotation = keyframes`
  from {
        transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Div = styled.div`
    padding: 32px;

    .card {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;

        .image {
            width: 330px;
        }

        .info {
            margin: 16px;
            padding: 16px;

            .brand {
                font-size: 20px;
                font-weight: 500;
            }

            .name {
                color: #777;
                margin: 16px 0;
            }

            .amount {
                font-size: 20px;
                font-weight: 500;
            }

            .size-box {
                margin-top: 32px;

                .head {
                    margin-bottom: 16px;
                    display: flex;
                    align-items: baseline;

                    .title {
                        font-weight: 500;
                    }

                    .chart {
                        color: #4a00e0;
                        margin-left: 16px;
                        font-size: 14px;
                        cursor: pointer;

                        @media (hover: hover) {
                            &:hover {
                                text-decoration: underline;
                            }
                        }

                        @media (hover: none) {
                            &:active {
                                text-decoration: underline;
                            }
                        }
                    }
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
            }

            .actions {
                margin-top: 32px;
                display: flex;

                button {
                    font: inherit;
                    font-weight: 500;
                    border-radius: 6px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    outline: none;
                    cursor: pointer;
                    border: none;
                    width: 145px;
                    height: 48px;
                }

                .cart {
                    background: #8e2de2;
                    background: -webkit-linear-gradient(
                        to right,
                        #8e2de2,
                        #4a00e0
                    );
                    background: linear-gradient(to right, #8e2de2, #4a00e0);
                    color: white;
                    margin-left: 16px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

                    .loader {
                        width: 18px;
                        height: 18px;
                        border: 2px solid #fff;
                        border-bottom-color: transparent;
                        border-radius: 50%;
                        display: block;
                        animation: ${rotation} 1s linear infinite;
                    }
                }

                .wishlist {
                    background-color: white;
                    border: 1px #4a00e0 solid;
                    color: #4a00e0;
                }
            }
        }
    }

    @media (max-width: 640px) {
        padding: 16px;

        .card {
            flex-direction: column;

            .image {
                width: 100%;
            }

            .info {
                width: 100%;
                padding: 0;
                margin-bottom: 0;

                .brand {
                    font-size: 18px;
                    font-weight: 500;
                }

                .name {
                    color: #777;
                    margin: 8px 0;
                }

                .amount {
                    font-size: 18px;
                    font-weight: 500;
                }

                .size-box {
                    margin-top: 16px;
                }

                .actions {
                    margin-top: 24px;

                    button {
                        width: 100%;
                    }
                }
            }
        }
    }
`;

export const ModalDiv = styled.div`
    padding: 16px;

    .title {
        color: #4a00e0;
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 16px;
    }

    .table {
        overflow: auto;

        table {
            border-collapse: collapse;
            font-size: 14px;
            width: 474px;

            &.jeans {
                width: 356px;
            }

            th {
                font-weight: 500;
            }

            td,
            th {
                border-top: 1px solid #ddd;
                border-bottom: 1px solid #ddd;
                text-align: center;
                padding: 16px;
            }

            tr {
                th:first-child,
                td:first-child {
                    border-left: 1px solid #ddd;
                }

                th:last-child,
                td:last-child {
                    border-right: 1px solid #ddd;
                }
            }
        }
    }
`;
