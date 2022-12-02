import React, { ReactNode } from 'react';
import styled from 'styled-components';

const HighlightedStyled = styled.span<{ accent: boolean }>`
    color: ${({ accent }) =>
        !accent ? 'var(--clr-text-header)' : 'var(--clr-accent)'};
`;

interface HighlightedProps {
    children: ReactNode | ReactNode[];
    accent?: boolean;
}

export function Highlighted({ children, accent = false }: HighlightedProps) {
    return <HighlightedStyled accent={accent}>{children}</HighlightedStyled>;
}
