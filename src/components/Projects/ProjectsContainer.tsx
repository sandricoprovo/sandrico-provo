import React, { ReactNode } from 'react';
import styled from 'styled-components';

const ProjectsContainerStyled = styled.section`
    margin: 0 var(--spacing-content-mobile);
    margin-bottom: var(--spacing-margin);

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 80px;

    @media (min-width: 575px) {
        margin: 0 var(--spacing-content);
        margin-bottom: var(--spacing-margin);
    }
`;

interface ProjectContainerProps {
    children: ReactNode | ReactNode[];
}

export function ProjectsContainer({ children }: ProjectContainerProps) {
    return <ProjectsContainerStyled>{children}</ProjectsContainerStyled>;
}
