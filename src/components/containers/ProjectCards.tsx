import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { SubHeader } from '../shared/typography';

const ProjectCardsContainer = styled.section`
    border: 2px solid red;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const ProjectCardsGrid = styled.section`
    border: 2px solid blue;
    width: 100%;
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
