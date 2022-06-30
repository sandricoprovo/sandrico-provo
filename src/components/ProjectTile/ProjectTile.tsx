import Image from 'next/image';

import { Project } from '../../types/Project';
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
    project: Project;
}

const AP_DELAY = 0.5;

function ProjectTile({ isProjectsInView, project }: ProjectTileProps) {
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
                    <ProjectTitle>{project.name}</ProjectTitle>
                    <ProjectStack>
                        {project.techStack.map((stackTech) => (
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
                    <p>{project.description}</p>
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
                        src={project.image.src}
                        alt={project.image.alt}
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        blurDataURL={`${project.image.blurUrl}`}
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
                    <GitHubIcon href={project.links.github} />
                    <ExternalLinkIcon href={project.links.external} />
                </ProjectIcons>
            </ProjectContainer>
        )
    );
}

export default ProjectTile;
