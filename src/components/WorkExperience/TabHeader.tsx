import React, { ReactNode } from 'react';
import styled from 'styled-components';

const TabList = styled.ul`
    padding: 0 var(--spacing-content-mobile);

    display: flex;
    flex-wrap: wrap;
    gap: 40px;

    @media screen and (min-width: 575px) {
        padding: 0 var(--spacing-content);
    }
`;

interface TabHeaderProps {
    children: ReactNode | ReactNode[];
}

export function TabHeader({ children }: TabHeaderProps) {
    return <TabList>{children}</TabList>;
}
