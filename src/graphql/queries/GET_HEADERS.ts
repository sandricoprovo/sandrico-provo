import { gql } from '@apollo/client';

export const GET_HEADER = gql`
    query Header($header: String!) {
        headers(where: { label: { equals: $header } }) {
            logo
            label
            links {
                label
            }
        }
    }
`;

export const GET_ALL_HEADERS = gql`
    query Headers {
        headers {
            logo
            label
            links {
                label
            }
        }
    }
`;
