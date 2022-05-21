import styled from "styled-components";

export const Div = styled.div`
    margin-top: 32px;

    .heading {
        margin-bottom: 16px;
        font-size: 16px;
        font-weight: 500;
    }

    .item {
        display: flex;
        align-items: flex-start;
        margin: 8px 0;

        .text {
            margin: 0;
            padding: 0;
            font-size: 14px;
        }
    }

    @media (max-width: 640px) {
        margin-top: 0;
        margin-right: 32px;

        .item {
            margin: 16px 0;
        }
    }
`;
