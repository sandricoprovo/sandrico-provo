import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Project } from '../../types/project';
import { GithubIcon, ExternalLinkIcon } from '../shared/icons';
import { BodyText, Highlighted } from '../shared/typography';
import { fadeUp, MOTION_DEFAULTS } from '../shared/motions';

const ProjectCardStyled = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 20px;

    &:hover img {
        transform: scale(1.08);
    }
`;
const CardHeader = styled.h3`
    font: var(--font-body);
    color: var(--clr-text-header);

    & ~ p {
        min-height: 88px;
    }
`;
const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 300px;
    background-color: var(--clr-project-img-background);
    border-radius: var(--br-image);
    overflow: hidden;
`;
const CardImage = styled(Image)`
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    transition: transform 0.3s var(--easing-hover);
`;
const StackContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    min-height: 56px;

    li > p {
        font-size: var(--font-75);
    }
`;
const StackList = styled.li`
    & > p {
        font-size: var(--font-75);
    }
`;
const BottomRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`;
const IconsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--spg-links);

    @media screen and (hover: hover) {
        & > a:hover > svg {
            fill: var(--clr-accent);
        }
    }
`;

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
        <ProjectCardStyled
            variants={fadeUp}
            transition={{
                delay: order / 100,
                duration: MOTION_DEFAULTS.DURATION,
                ease: MOTION_DEFAULTS.EASE,
            }}
            initial="initial"
            animate="animate"
        >
            <ImageContainer>
                <CardImage
                    src={photo.src}
                    alt={photo.alt}
                    placeholder="blur"
                    blurDataURL={photo.src.blurDataURL}
                />
            </ImageContainer>
            <CardHeader>{name}</CardHeader>
            <BodyText>{description}</BodyText>
            <StackContainer>
                {stack.map((tech) => (
                    <StackList key={`${id}_${tech}`}>
                        <BodyText>{tech}</BodyText>
                    </StackList>
                ))}
            </StackContainer>
            <BottomRow>
                <BodyText>
                    <Highlighted>{projectYear}</Highlighted>
                </BodyText>
                <IconsContainer>
                    {github ? <GithubIcon title={name} href={github} /> : null}
                    {external ? (
                        <ExternalLinkIcon title={name} href={external} />
                    ) : null}
                </IconsContainer>
            </BottomRow>
        </ProjectCardStyled>
    );
}
