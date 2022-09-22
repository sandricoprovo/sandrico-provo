import styled from 'styled-components';

const PageStyled = styled.main`
    border: 2px solid black;
`;

export function Page({ children }: any) {
    return <PageStyled>{children}</PageStyled>;
}
