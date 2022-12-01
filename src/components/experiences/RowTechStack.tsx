import React from 'react';
import styled from 'styled-components';

import { Children } from '../../types/children';

const RowTechStackStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const TechStackHeader = styled.p`
    font: var(--font-body);
`;

const StackList = styled.ul`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
`;

interface RowTechStackProps {
    children: Children;
}

export function RowTechStack({ children }: RowTechStackProps) {
    return (
        <RowTechStackStyled>
            <TechStackHeader>Tech Used</TechStackHeader>
            <StackList>{children}</StackList>
        </RowTechStackStyled>
    );
}
