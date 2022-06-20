import Image from 'next/image';

import WaveFadeInText from '../WaveFadeInText';
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

const AP_DELAY = 0.5;

function ProjectTile({ isProjectsInView }: ProjectTileProps) {
    return (
        isProjectsInView && (
            <ProjectContainer>
                <ProjectInfo
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.3,
                        delay: 1.5 - AP_DELAY,
                        ease: [0.08, 0.82, 0.17, 1],
                    }}
                    exit={{
                        opacity: 0,
                    }}
                >
                    <ProjectTitle>ESlint + Prettier Config</ProjectTitle>
                    <ProjectStack>
                        {[
                            'React',
                            'NextJS',
                            'TypeScript',
                            'KeystoneJS',
                            'Git',
                            'Git',
                            'Git',
                        ].map((stackTech) => (
                            <ProjectStackItem key={stackTech}>
                                {stackTech}
                            </ProjectStackItem>
                        ))}
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
                        duration: 0.8,
                        delay: 1 - AP_DELAY,
                        ease: [0.08, 0.82, 0.17, 1],
                    }}
                    exit={{
                        x: -400,
                        opacity: 0,
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
                        delay: 0.05,
                        ease: [0.08, 0.82, 0.17, 1],
                    }}
                    exit={{
                        opacity: 0,
                    }}
                >
                    <Image
                        src={mockTileImage}
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        blurDataURL={`${mockTileImage.blurDataURL}`}
                    />
                </ProjectImage>
                <ProjectIcons
                    initial={{
                        scale: 0,
                        opacity: 0,
                    }}
                    animate={{
                        scale: 1,
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.35,
                        delay: 1.3 - AP_DELAY,
                        ease: [0.08, 0.82, 0.17, 1],
                    }}
                    exit={{
                        scale: 0,
                        opacity: 0,
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
