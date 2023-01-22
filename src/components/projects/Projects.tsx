import React from 'react';

import { orderedProjects } from '../../content/projectsList';
import { SubHeader } from '../shared/typography';

import { ProjectsSection } from './ProjectsSection';
import { ProjectCard } from './ProjectCard';

export function Projects() {
    return (
        <div>
            <SubHeader>Projects</SubHeader>
            <ProjectsSection>
                {orderedProjects.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        order={index}
                    />
                ))}
            </ProjectsSection>
        </div>
    );
}
