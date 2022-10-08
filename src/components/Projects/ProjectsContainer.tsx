import React, { ReactNode } from 'react';
import styled from 'styled-components';

const ProjectsContainerStyled = styled.section`
    margin: var(--spacing-vertical) var(--spacing-content-mobile)
        var(--spacing-margin) var(--spacing-content-mobile);

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 80px;

    @media (min-width: 575px) {
        margin: var(--spacing-vertical) var(--spacing-content)
            var(--spacing-margin) var(--spacing-content);
    }
`;

interface ProjectContainerProps {
    children: ReactNode | ReactNode[];
}

export function ProjectsContainer({ children }: ProjectContainerProps) {
    return <ProjectsContainerStyled>{children}</ProjectsContainerStyled>;
}
