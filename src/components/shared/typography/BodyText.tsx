import React, { ReactNode } from 'react';
import styled from 'styled-components';

const BodyTextStyled = styled.p`
    font: var(--font-body);
    color: var(--clr-text);
    max-width: 80ch;
`;

interface BodyTextProps {
    children: ReactNode | ReactNode[];
}

export function BodyText({ children }: BodyTextProps) {
    return <BodyTextStyled>{children}</BodyTextStyled>;
}
