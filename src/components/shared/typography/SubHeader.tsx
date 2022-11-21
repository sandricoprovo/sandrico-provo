import React, { ReactNode } from 'react';
import styled from 'styled-components';

const SubHeaderStyled = styled.h2`
    font: var(--font-subheader);
    color: var(--clr-text-header);
`;

interface SubHeaderProps {
    children: ReactNode | ReactNode[];
}

export function SubHeader({ children }: SubHeaderProps) {
    return <SubHeaderStyled>{children}</SubHeaderStyled>;
}
