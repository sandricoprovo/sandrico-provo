import { gql } from '@apollo/client';

export const GET_NAV_BAR = gql`
    query NavBar($header: String!) {
        navBars(where: { label: { equals: $header } }) {
            logo
            label
            links {
                label
            }
        }
    }
`;

export const GET_ALL_NAV_BARS = gql`
    query NavBar {
        navBars {
            logo
            label
            links {
                label
            }
        }
    }
`;
