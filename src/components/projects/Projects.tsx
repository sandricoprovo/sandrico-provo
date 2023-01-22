import React from 'react';

import { orderedProjects } from '../../content/projectsList';
import { BodyText, SubHeader } from '../shared/typography';

import * as Styled from './ProjectStyles';
import { ProjectCard } from './ProjectCard';

export function Projects() {
    return (
        <>
            <SubHeader>Projects</SubHeader>
            <Styled.Container>
                <BodyText shouldMotion>
                    Below is a list of projects I've built. With each project I
                    strived to solve a problem, learn / practice a new
                    technology, or both. Use the link icons on each tile to view
                    its code or try out the application.
                </BodyText>
                <Styled.Grid>
                    {orderedProjects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            order={index}
                        />
                    ))}
                </Styled.Grid>
            </Styled.Container>
        </>
    );
}
