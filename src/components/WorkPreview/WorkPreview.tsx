import React from 'react';
import styled from 'styled-components';
import { ProjectSmall } from '../Projects/ProjectSmall';
import { projectsList } from '../../content/projects';
import { PreviewContainer } from './PreviewContainer';
import { Header } from './Header';

const Container = styled.section`
    padding: 0 var(--spacing-content);
    margin-bottom: var(--spacing-margin);
`;

export function WorkPreview() {
    return (
        <Container>
            <Header />
            <PreviewContainer>
                {projectsList.map((project) => {
                    if (!project.shouldFeature) {
                        return null;
                    }

                    return (
                        <ProjectSmall
                            key={project.name}
                            image={project.photo}
                            name={project.name}
                            alt={project.photoAlt}
                        />
                    );
                })}
            </PreviewContainer>
        </Container>
    );
}
