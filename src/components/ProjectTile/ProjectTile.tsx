import { useState, useEffect } from 'react';
import { Variants } from 'framer-motion';
import Image from 'next/image';

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

function ProjectTile() {
    return (
        // Add background img to top lvl div below
        <ProjectContainer>
            <ProjectInfo>
                <ProjectTitle>ESlint + Prettier Config</ProjectTitle>
                <ProjectStack>
                    {['React', 'NextJS', 'TypeScript', 'KeystoneJS'].map(
                        (stackTech) => (
                            <ProjectStackItem>{stackTech}</ProjectStackItem>
                        )
                    )}
                </ProjectStack>
            </ProjectInfo>
            <ProjectDescriptionContainer>
                <p>
                    Once I had learned enough to understand what ESlint &
                    Prettier do, I found myself using it in all of my projects
                    to make my writing more consistent. However, I found I was
                    doing a copy-paste of the configuration with each new
                    project. To solve that issue, I created this package so I
                    could have an easily accessible package I could grab. Having
                    this package also makes distributing updates quick and easy
                    across projects that use this.
                </p>
            </ProjectDescriptionContainer>
            <ProjectImage whileHover={{ scale: 1.1 }}>
                <Image
                    src={mockTileImage}
                    layout="responsive"
                    placeholder="blur"
                    blurDataURL={`${mockTileImage.blurDataURL}`}
                />
            </ProjectImage>
            <ProjectIcons>
                <GitHubIcon href="https://sandricoprovo.dev" />
                <ExternalLinkIcon href="https://sandricoprovo.dev" />
            </ProjectIcons>
        </ProjectContainer>
    );
}

export default ProjectTile;
