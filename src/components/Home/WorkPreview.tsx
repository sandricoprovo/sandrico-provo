import React from 'react';
import styled from 'styled-components';
import { ProjectSmall } from '../Projects/ProjectSmall';
import { projectsList } from '../../content/projects';

const Container = styled.section`
    width: 100%;
    margin-bottom: var(--spacing-margin);
    padding: 0 var(--spacing-content-mobile);

    & > h3 {
        font-family: var(--font-header);
        font-size: var(--font-xl);
        margin-bottom: var(--spacing-content);
    }

    & > h3 > span:nth-of-type(1) {
        font-size: var(--font-md);
        color: var(--clr-text);
        font-family: var(--font-display);
    }

    & > h3 > span:nth-of-type(2) {
        color: var(--clr-main);
    }

    & > div {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        gap: 4rem;
        padding-bottom: var(--spacing-content-mobile);
    }

    @media (min-width: 575px) {
        padding: 0 var(--spacing-content);

        & > div {
            padding-bottom: var(--spacing-content);
        }
    }
`;

export function WorkPreview() {
    return (
        <Container>
            <h3>
                <span>Recent</span> <br /> Work<span>.</span>
            </h3>
            <div>
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
            </div>
        </Container>
    );
}
