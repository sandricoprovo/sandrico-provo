import React from 'react';
import styled from 'styled-components';

import { Children } from '../../types/children';
import { SubHeader } from '../shared/typography';

const GearContainer = styled.section`
    margin-block: var(--spg-section);

    display: flex;
    flex-wrap: wrap;
    gap: 24px;
`;

const GearListsContainer = styled.div`
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    gap: 80px;
`;

interface GearSectionProps {
    children: Children;
}

export function GearSection({ children }: GearSectionProps) {
    return (
        <GearContainer>
            <SubHeader>My Setup</SubHeader>
            <GearListsContainer>{children}</GearListsContainer>
        </GearContainer>
    );
}
