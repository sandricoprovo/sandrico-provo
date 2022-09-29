import React from 'react';
import styled from 'styled-components';

import { Head } from '../src/components/Head/Head';
import { Hero } from '../src/components/Hero';
import { ProjectFull } from '../src/components/Projects';

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
            <Hero
                header={{
                    overline: 'My',
                    lineOne: 'Wo',
                    lineTwo: 'rks.',
                }}
            />
            <ProjectsContainer>
                <ProjectFull />
            </ProjectsContainer>
        </>
    );
}

export default Projects;
