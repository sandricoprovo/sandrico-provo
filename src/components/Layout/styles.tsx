import styled from 'styled-components';

export const LayoutContainer = styled.div`
    background-color: var(--clr-background);
    position: relative;
    max-width: var(--max-page-width);
    height: 100vh;
    display: grid;
    grid-template-rows: 100px 1fr 10vh;

    @supports (-webkit-touch-callout: none) {
        body {
            /* The hack for Safari */
            height: -webkit-fill-available;
        }
    }
`;
