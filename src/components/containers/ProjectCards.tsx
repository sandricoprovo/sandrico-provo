import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { SubHeader } from '../shared/typography';

const ProjectCardsContainer = styled.section`
    margin-block-end: var(--spg-section);
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const ProjectCardsGrid = styled.section`
    width: 100%;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 64px;
`;

interface ProjectCardsContainerProps {
    children: ReactNode | ReactNode[];
}

export function ProjectCards({ children }: ProjectCardsContainerProps) {
    return (
        <ProjectCardsContainer>
            <SubHeader>Projects</SubHeader>
            <ProjectCardsGrid>{children}</ProjectCardsGrid>
        </ProjectCardsContainer>
    );
}
