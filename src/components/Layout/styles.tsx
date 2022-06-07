import styled from 'styled-components';

export const LayoutContainer = styled.div`
    background-color: var(--clr-background);
    position: relative;
    height: 100vh;

    @supports (-webkit-touch-callout: none) {
        body {
            /* The hack for Safari */
            height: -webkit-fill-available;
        }
    }
`;
