import React, { ReactNode } from 'react';
import styled from 'styled-components';

const TabHeaderStyled = styled.div`
    margin-block-end: 20px;
`;

interface TabHeaderProps {
    children: ReactNode | ReactNode[];
}

export function TabHeader({ children }: TabHeaderProps) {
    return <TabHeaderStyled>{children}</TabHeaderStyled>;
}
