import styled from "styled-components";

export const BoxCard = styled.div`
    border: 1px #eee solid;
    font-size: 14px;

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
`;
