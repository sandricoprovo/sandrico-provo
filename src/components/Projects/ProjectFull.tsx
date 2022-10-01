import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { ExternalLinkIcon, GitHubIcon } from '../Shared/Icons';
import { Project } from '../../types/Project';

const ProjectFullStyled = styled.div`
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 64px;

    & > div:nth-of-type(1) {
        position: relative;
        width: 100%;
        min-width: 300px;
        max-width: 450px;
        height: 400px;
    }

    & > div:nth-of-type(2) {
        height: 100%;
        width: 100%;
        max-width: 650px;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 40px;
    }

    & > div:nth-of-type(2) > div:nth-of-type(1) {
        width: 100%;
        max-width: 650px;

        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: flex-start;
    }

    & > div:nth-of-type(2) > div:nth-of-type(1) > div {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 24px;
    }

    & > div:nth-of-type(2) > div:nth-of-type(1) > p {
        width: 50%;
        min-width: 200px;
        font-family: var(--font-display);
        font-size: var(--font-md);
        color: var(--clr-text);
    }

    & > div:nth-of-type(2) > div:nth-of-type(1) > a {
        font-size: var(--font-base);
        color: var(--clr-text);
        text-decoration: none;
    }

    & > div:nth-of-type(2) > p {
        line-height: 180%;
    }

    & > div:nth-of-type(2) > div:nth-of-type(2) {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 16px;

        & > div {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;

            & > p {
                font-family: var(--font-body);
                font-size: var(--font-sm);
            }
        }

        & > p {
            font-family: var(--font-display);
            font-size: var(--font-base);
        }
    }
`;

interface ProjectFullProps {
    project: Project;
}

export function ProjectFull({ project }: ProjectFullProps) {
    const { description, links, name, photo, stack } = project;

    return (
        <ProjectFullStyled id={name}>
            <div>
                <Image src={photo.src} layout="fill" objectFit="contain" />
            </div>
            <div>
                <div>
                    <p>{name}</p>
                    <div>
                        {links.github && (
                            <GitHubIcon title="GitHub" href={links.github} />
                        )}
                        {links.external && (
                            <ExternalLinkIcon
                                title="Live Site"
                                href={links.external}
                            />
                        )}
                    </div>
                </div>
                <p>{description}</p>
                <div>
                    <p>Tech Stack</p>
                    <div>
                        {stack.map((tech) => (
                            <p>{tech}</p>
                        ))}
                    </div>
                </div>
            </div>
        </ProjectFullStyled>
    );
}
