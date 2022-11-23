import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { SubHeader } from '../shared/typography';

const ProjectsContainer = styled.section`
    margin-block-end: var(--spg-section);
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const ProjectsGrid = styled.section`
    width: 100%;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 64px;
`;

interface ProjectsGridContainerProps {
    children: ReactNode | ReactNode[];
}

export function ProjectsSection({ children }: ProjectsGridContainerProps) {
    return (
        <ProjectsContainer>
            <SubHeader>Projects</SubHeader>
            <ProjectsGrid>{children}</ProjectsGrid>
        </ProjectsContainer>
    );
}
