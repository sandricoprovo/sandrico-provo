import React from 'react';

import { orderedProjects } from '../content/projectsList';

import { ProjectsSection } from './containers/ProjectsSection';
import { ProjectCard } from './ProjectCard';

export function Projects() {
    return (
        <ProjectsSection>
            {orderedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </ProjectsSection>
    );
}
