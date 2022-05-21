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

const rotation = keyframes`
  from {
        transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }    
`;

export const Div = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;

    p {
        line-height: 1.6;

        .bold {
            font-weight: 600;
        }
    }

    .box {
        border: 1px #eee solid;
        max-width: 500px;
        width: 100%;
        background-color: white;
        padding: 32px;
        margin: auto;
        border-radius: 8px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);

        .title {
            margin-top: 16px;
            text-align: center;

            .icon {
                filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.2));
            }
        }

        .server {
            border: 1px #ff4646 solid;
            color: #ff4646;
            border-radius: 6px;
            font-size: 14px;
            padding: 13px;
            margin-top: 24px;
            text-align: center;
        }

        .form {
            margin-top: 32px;
            font-size: 14px;

            .form-control {
                margin-bottom: 20px;

                input {
                    display: block;
                    font: inherit;
                    color: inherit;
                    width: 100%;
                    padding: 13px 16px;
                    outline: none;
                    border: 1px #ccc solid;
                    border-radius: 6px;

                    &::placeholder {
                        color: #aaa;
                    }

                    &:focus {
                        border-color: #4a00e0;
                    }
                }

                .hint {
                    font-size: 13px;
                    margin-top: 2px;
                    margin-left: 4px;
                    color: #ff4646;
                    display: none;
                }

                &.error {
                    input {
                        border-color: #ff4646;
                    }

                    .hint {
                        display: block;
                    }
                }
            }

            button {
                font: inherit;
                background: #8e2de2;
                background: -webkit-linear-gradient(to right, #8e2de2, #4a00e0);
                background: linear-gradient(to right, #8e2de2, #4a00e0);
                color: white;
                font-weight: 500;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 45px;
                outline: none;
                cursor: pointer;
                border: none;
                border-radius: 6px;
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
        }

        .info {
            margin-top: 32px;
            margin-bottom: 16px;
            text-align: center;
            font-size: 14px;

            a {
                text-decoration: none;
                color: #4a00e0;

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
    }

    @media (max-width: 640px) {
        .box {
            border: none;
            box-shadow: none;
            padding: 16px;
        }
    }
`;
