import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { BodyText } from '../shared/typography';

const ProjectsContainer = styled.section`
    margin-block-end: var(--spg-section);
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 40px;
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
            <BodyText shouldMotion>
                Below is a list of projects I've built. With each project I
                strived to solve a problem, learn / practice a new technology,
                or both. Use the link icons on each tile to view its code or try
                out the application.
            </BodyText>
            <ProjectsGrid>{children}</ProjectsGrid>
        </ProjectsContainer>
    );
}
