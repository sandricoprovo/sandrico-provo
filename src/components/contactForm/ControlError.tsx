import React from 'react';
import styled from 'styled-components';

import { Children } from '../../types/children';

const ControlErrorStyled = styled.span`
    font-size: var(--font-75);
    color: var(--clr-danger);
    font-family: var(--font-primary);
    height: 12px;
`;

interface ControlErrorProps {
    children: Children;
}

export function ControlError({ children }: ControlErrorProps) {
    return <ControlErrorStyled>{children}</ControlErrorStyled>;
}
