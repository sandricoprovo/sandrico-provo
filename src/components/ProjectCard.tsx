import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { Project } from '../types/project';

import { GithubIcon, ExternalLinkIcon } from './shared/icons';
import { BodyText, Highlighted } from './shared/typography';

const ProjectCardStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    /* Project Name */
    & > h3:nth-child(2) {
        font: var(--font-body);
        color: var(--clr-text-header);
    }

    /* Project Description */
    & > h3 ~ p {
        min-height: 88px;
    }

    /* Image Container */
    & > div:first-of-type {
        position: relative;
        width: 100%;
        height: 300px;
        background-color: var(--clr-project-img-background);
        border-radius: var(--br-image);
        overflow: hidden;

        & img {
            max-width: 100%;
            max-height: 100%;
            object-fit: cover;
            transition: transform 0.3s var(--easing-hover);
        }
    }

    &:hover img {
        transform: scale(1.08);
    }

    /* Tech Stack Container */
    & > ul {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        min-height: 56px;

        li > p {
            font-size: var(--font-75);
        }
    }

    /* Bottom Row Container */
    & > div:last-child {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
    }

    /* Link Icons Container */
    & > div:last-child > div:last-child {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: var(--spg-links);

        @media screen and (hover: hover) {
            & > a:hover > svg {
                fill: var(--clr-accent);
            }
        }
    }
`;

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    const {
        id,
        description,
        links: { external, github },
        name,
        photo,
        stack = [],
        updatedOn,
    } = project;
    const projectYear = new Date(updatedOn).getFullYear();

    return (
        <ProjectCardStyled>
            <div>
                <Image src={photo.src} alt={photo.alt} />
            </div>
            <h3>{name}</h3>
            <BodyText>{description}</BodyText>
            <ul>
                {stack.map((tech) => (
                    <li key={`${id}_${tech}`}>
                        <BodyText>{tech}</BodyText>
                    </li>
                ))}
            </ul>
            <div>
                <BodyText>
                    <Highlighted>{projectYear}</Highlighted>
                </BodyText>
                <div>
                    {github ? <GithubIcon title={name} href={github} /> : null}
                    {external ? (
                        <ExternalLinkIcon title={name} href={external} />
                    ) : null}
                </div>
            </div>
        </ProjectCardStyled>
    );
}
