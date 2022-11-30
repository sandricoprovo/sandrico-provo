import React from 'react';
import styled from 'styled-components';

import { Children } from '../../types/children';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 24px;
`;

interface LogoContainerProps {
    children: Children;
}

export function LogoContainer({ children }: LogoContainerProps) {
    return <Container>{children}</Container>;
}
