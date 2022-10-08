import styled from 'styled-components';

const PageStyled = styled.main`
    max-width: var(--spacing-page-max);
    padding: auto var(--spacing-content-mobile);
    background-color: var(--clr-background);
    overflow-x: hidden;

    @media (min-width: 575px) {
        margin: 0 var(--spacing-content);
    }
`;

export function Page({ children }: any) {
    return <PageStyled>{children}</PageStyled>;
}
