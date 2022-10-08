import React from 'react';
import styled from 'styled-components';

import { Head } from '../src/components/Head/Head';
import { HeroContainer } from '../src/components/Hero/HeroContainer';
import { HeroHeader } from '../src/components/Hero/HeroHeader';
import { ProjectFull } from '../src/components/Projects';
import { projectsList } from '../src/content/projects';

const ProjectsContainer = styled.section`
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

function Projects() {
    return (
        <>
            <Head title="Sandrico Provo - Projects" />
            <HeroContainer>
                <HeroHeader content="Projects" />
            </HeroContainer>
            <ProjectsContainer>
                {projectsList.map((project) => (
                    <ProjectFull key={project.name} project={project} />
                ))}
            </ProjectsContainer>
        </>
    );
}

export default Projects;
