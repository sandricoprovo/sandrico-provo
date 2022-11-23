import React, { ReactNode } from 'react';
import styled from 'styled-components';

const TabButtonsStyled = styled.ul`
    width: 100%;

    display: flex;
    align-items: center;

    & > li {
        list-style: none;
        width: 150px;
    }
`;

interface TabButtonsProps {
    children: ReactNode | ReactNode[];
}

export function TabButtons({ children }: TabButtonsProps) {
    return <TabButtonsStyled>{children}</TabButtonsStyled>;
}
