import styled from "styled-components";

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

export const Div = styled.div`
    flex: 1;
    display: flex;

    .aside {
        width: 300px;
        padding: 16px;

        .title {
            font-size: 18px;
            font-weight: 500;
        }
    }

    .main {
        width: 100%;
        padding: 16px;
        display: flex;
        flex-direction: column;

        .top {
            display: flex;

            .title {
                font-size: 18px;
                font-weight: 500;
                margin-right: auto;
            }
        }

        .clothes {
            margin: 16px 0;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 16px;
        }
    }

    @media (max-width: 1024px) {
        .main {
            .clothes {
                grid-template-columns: repeat(3, 1fr);
            }
        }
    }

    @media (max-width: 768px) {
        .main {
            .clothes {
                grid-template-columns: repeat(2, 1fr);
            }
        }
    }

    @media (max-width: 640px) {
        .main {
            .top {
                align-items: center;

                .sort-filter {
                    display: flex;
                }
            }

            .clothes {
                margin-bottom: 0;
            }
        }
    }
`;
