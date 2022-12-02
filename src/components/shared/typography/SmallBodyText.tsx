import React from 'react';
import styled from 'styled-components';

import { Children } from '../../../types/children';

const SmallBodyTextStyled = styled.p`
    font: var(--font-body);
    color: var(--clr-text);
    font-size: var(--font-75);
    line-height: 100%;
    max-width: 80ch;
`;

interface SmallBodyTextProps {
    children: Children;
}

export function SmallBodyText({ children }: SmallBodyTextProps) {
    return <SmallBodyTextStyled>{children}</SmallBodyTextStyled>;
}
