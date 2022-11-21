import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Header1Styled = styled.h1`
    font: var(--font-header);
    color: var(--clr-text-header);
`;

interface Header1Props {
    children: ReactNode | ReactNode[];
}

export function Header1({ children }: Header1Props) {
    return <Header1Styled>{children}</Header1Styled>;
}
