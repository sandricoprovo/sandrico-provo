import React from 'react';

import { Project } from '../../types/project';
import { GithubIcon, ExternalLinkIcon } from '../shared/icons';
import { BodyText, Highlighted } from '../shared/typography';
import { fadeUp, MOTION_DEFAULTS } from '../shared/motions';

import * as Styled from './ProjectCardStyles';

interface ProjectCardProps {
    project: Project;
    order: number;
}

export function ProjectCard({ project, order }: ProjectCardProps) {
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
        <Styled.Card
            variants={fadeUp}
            transition={{
                delay: order / 100,
                duration: MOTION_DEFAULTS.DURATION,
                ease: MOTION_DEFAULTS.EASE,
            }}
            initial="initial"
            animate="animate"
        >
            <Styled.ImageContainer>
                <Styled.CardImage
                    src={photo.src}
                    alt={photo.alt}
                    placeholder="blur"
                    blurDataURL={photo.src.blurDataURL}
                />
            </Styled.ImageContainer>
            <Styled.Header>{name}</Styled.Header>
            <BodyText>{description}</BodyText>
            <Styled.Stack>
                {stack.map((tech) => (
                    <Styled.StackItem key={`${id}_${tech}`}>
                        <BodyText>{tech}</BodyText>
                    </Styled.StackItem>
                ))}
            </Styled.Stack>
            <Styled.Footer>
                <BodyText>
                    <Highlighted>{projectYear}</Highlighted>
                </BodyText>
                <Styled.Icons>
                    {github ? <GithubIcon title={name} href={github} /> : null}
                    {external ? (
                        <ExternalLinkIcon title={name} href={external} />
                    ) : null}
                </Styled.Icons>
            </Styled.Footer>
        </Styled.Card>
    );
}
