import styled from 'styled-components';

const PageStyled = styled.main`
    border: 2px solid black;
    padding: 0 var(--spacing-content-mobile);
    background-color: var(--clr-content-bkg);

    @media (min-width: 575px) {
        padding: 0 var(--spacing-content);
    }
`;

export function Page({ children }: any) {
    return <PageStyled>{children}</PageStyled>;
}
