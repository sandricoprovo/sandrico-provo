import styled from 'styled-components';

const PageStyled = styled.main`
    border: 2px solid black;
    padding: 0 var(--spacing-content);
    background-color: var(--clr-content-bkg);
`;

export function Page({ children }: any) {
    return <PageStyled>{children}</PageStyled>;
}
