import { useState, useEffect, useRef } from 'react';
import { Variants } from 'framer-motion';
import Image from 'next/image';

import { useInView } from '../../hooks/useInView';
import mockTileImage from '../../../public/images/city.jpeg';
import { GitHubIcon, ExternalLinkIcon } from '../Icons';

import {
    ProjectContainer,
    ProjectInfo,
    ProjectTitle,
    ProjectStack,
    ProjectStackItem,
    ProjectImage,
    ProjectDescriptionContainer,
    ProjectIcons,
} from './styles';

interface ProjectTileProps {
    isProjectsInView: boolean;
}

function ProjectTile({ isProjectsInView }: ProjectTileProps) {
    console.log({ isProjectsInView });

    return (
        isProjectsInView && (
            <ProjectContainer>
                <ProjectInfo
                    initial={{
                        y: 400,
                        opacity: 0,
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                    }}
                    transition={{
                        duration: 1.2,
                        delay: 0.8,
                        ease: [0.08, 0.82, 0.17, 1],
                    }}
                >
                    <ProjectTitle>ESlint + Prettier Config</ProjectTitle>
                    <ProjectStack>
                        {['React', 'NextJS', 'TypeScript', 'KeystoneJS'].map(
                            (stackTech) => (
                                <ProjectStackItem key={stackTech}>
                                    {stackTech}
                                </ProjectStackItem>
                            )
                        )}
                    </ProjectStack>
                </ProjectInfo>
                <ProjectDescriptionContainer
                    initial={{
                        x: -400,
                        opacity: 0,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                    }}
                    transition={{
                        duration: 1.2,
                        delay: 1,
                        ease: [0.08, 0.82, 0.17, 1],
                    }}
                >
                    <p>
                        Once I had learned enough to understand what ESlint &
                        Prettier do, I found myself using it in all of my
                        projects to make my writing more consistent. However, I
                        found I was doing a copy-paste of the configuration with
                        each new project. To solve that issue, I created this
                        package so I could have an easily accessible package I
                        could grab. Having this package also makes distributing
                        updates quick and easy across projects that use this.
                    </p>
                </ProjectDescriptionContainer>
                <ProjectImage
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.6,
                        delay: 0.15,
                        ease: [0.08, 0.82, 0.17, 1],
                    }}
                >
                    <Image
                        src={mockTileImage}
                        layout="responsive"
                        placeholder="blur"
                        blurDataURL={`${mockTileImage.blurDataURL}`}
                    />
                </ProjectImage>
                <ProjectIcons
                    initial={{
                        y: -400,
                        opacity: 0,
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.4,
                        delay: 1.3,
                        ease: [0.08, 0.82, 0.17, 1],
                    }}
                >
                    <GitHubIcon href="https://sandricoprovo.dev" />
                    <ExternalLinkIcon href="https://sandricoprovo.dev" />
                </ProjectIcons>
            </ProjectContainer>
        )
    );
}

export default ProjectTile;
