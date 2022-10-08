import styled from 'styled-components';

const PageStyled = styled.main`
    max-width: var(--spacing-page-max);
    background-color: var(--clr-background);
    overflow-x: hidden;
`;

export function Page({ children }: any) {
    return <PageStyled>{children}</PageStyled>;
}
