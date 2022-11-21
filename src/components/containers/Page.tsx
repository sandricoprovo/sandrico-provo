import React, { ReactNode } from 'react';
import styled from 'styled-components';

const PageStyled = styled.main`
    width: 100%;
    max-width: var(--spg-layout-max-width);
    margin-inline: auto;
    background-color: var(--clr-background);
`;

interface PageProps {
    children: ReactNode | ReactNode[];
}

export function Page({ children }: PageProps) {
    return <PageStyled>{children}</PageStyled>;
}
