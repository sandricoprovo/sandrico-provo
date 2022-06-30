import { useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';

import { projects } from '../src/content/projects';
import {
    workExperience,
    professionalLinks,
} from '../src/content/workExperience';
import { meImage, aboutMe } from '../src/content/aboutMe';
import {
    GitHubIcon,
    FileIcon,
    LinkedInIcon,
    TwitterIcon,
} from '../src/components/Icons';
import Page from '../src/components/Page';
import WaveFadeInText from '../src/components/WaveFadeInText';
import {
    HeroSection,
    HeroHeader,
    HeroContent,
    HeroText,
    HeroImageContainer,
    HeroSubHeader,
    ContentSection,
    SectionHeader,
    ProjectsContainer,
    WorkContainer,
    SectionHeaderContainer,
    WorkIconsContainer,
    AboutMeContent,
} from '../src/components/HomePage/styles';
import ProjectTile from '../src/components/ProjectTile/ProjectTile';
import WorkTile from '../src/components/WorkTIle/WorkTile';
import PaginationControls from '../src/components/PaginationControls/PaginationControls';
import { useInView } from '../src/hooks/useInView';
import { useDebounce } from '../src/hooks/useDebounce';
import { Project } from '../src/types/Project';

const textVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
};

const sectionContainerVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.1,
            staggerChildren: 0.5,
            delayChildren: 0.3,
        },
    },
};

const sectionChildVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1.2,
        },
    },
};

const DELAY_HERO = 1.2;

function HomePage() {
    const [featuredProject, setFeaturedProject] = useState(projects[0]);
    const debouncedFeaturedProject = useDebounce<Project>(featuredProject, 500);

    const projectsContainerRef = useRef<HTMLDivElement>(null);
    const workContainerRef = useRef<HTMLDivElement>(null);
    const aboutContainerRef = useRef<HTMLParagraphElement>(null);
    const { isInView: isProjectsInView } = useInView<HTMLDivElement>({
        ref: projectsContainerRef,
        threshold: 60,
        rootMargin: '0px',
        freezeOnceVisible: true,
    });
    const { isInView: isWorkXpInView } = useInView<HTMLDivElement>({
        ref: workContainerRef,
        threshold: 100,
        rootMargin: '0px',
        freezeOnceVisible: true,
    });
    const { isInView: isAboutMeInView } = useInView<HTMLParagraphElement>({
        ref: aboutContainerRef,
        threshold: 100,
        rootMargin: '0px',
        freezeOnceVisible: true,
    });

    function moveToPosition(index: number) {
        const selectedProject = projects[index];
        if (!selectedProject) return;
        setFeaturedProject(selectedProject);
    }

    function moveToNext() {
        console.log('Switching to next Project...');
        const nextProject = projects[featuredProject.index + 1];
        if (!nextProject) return;
        setFeaturedProject(nextProject);
    }

    function moveToPrevious() {
        console.log('Switching to Previous Project...');
        const previousProject = projects[featuredProject.index - 1];
        if (!previousProject) return;
        setFeaturedProject(previousProject);
    }

    return (
        <Page>
            {/* Hero */}
            <HeroSection>
                <div>
                    <HeroHeader
                        variants={textVariants}
                        initial="initial"
                        animate="animate"
                        transition={{
                            duration: 0.8,
                            delay: 0.7 + DELAY_HERO,
                            ease: [0.08, 0.82, 0.17, 1],
                        }}
                    >
                        SOFTWARE <br /> DEVELOPER
                    </HeroHeader>
                    <HeroText
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 1,
                            delay: 1.2 + DELAY_HERO,
                            ease: [0.08, 0.82, 0.17, 1],
                        }}
                    >
                        I’m a software developer based in Halifax, Nova Scotia,
                        Canada 🇨🇦. Everyday in my work I create quality
                        production code that brings value to clients and
                        benefits to users.
                    </HeroText>
                </div>
                <HeroContent>
                    <HeroImageContainer
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 1,
                            delay: 1.2 + DELAY_HERO,
                            ease: [0.08, 0.82, 0.17, 1],
                        }}
                    >
                        <Image
                            src={meImage.src}
                            alt={meImage.alt}
                            layout="fill"
                            objectFit="cover"
                            placeholder="blur"
                            blurDataURL={meImage.blurUrl}
                        />
                    </HeroImageContainer>
                    <HeroSubHeader>
                        <WaveFadeInText
                            text="SANDRICO PROVO"
                            replay
                            duration={0.1}
                        />
                    </HeroSubHeader>
                </HeroContent>
            </HeroSection>
            {/* Projects */}
            <ContentSection>
                <SectionHeaderContainer>
                    <SectionHeader>Projects</SectionHeader>
                    <PaginationControls
                        state={{
                            isStartInList: debouncedFeaturedProject.index === 0,
                            isLastInList:
                                debouncedFeaturedProject.index ===
                                projects.length - 1,
                            currentPosition: debouncedFeaturedProject.index + 1,
                            total: projects.length,
                        }}
                        handlers={{
                            moveToNext,
                            moveToPrevious,
                            moveToStart: () => moveToPosition(0),
                            moveToEnd: () =>
                                moveToPosition(projects.length - 1),
                        }}
                    />
                </SectionHeaderContainer>
                <ProjectsContainer ref={projectsContainerRef}>
                    <AnimatePresence exitBeforeEnter>
                        {isProjectsInView && (
                            <ProjectTile
                                key={debouncedFeaturedProject.key}
                                isProjectsInView={isProjectsInView}
                                project={debouncedFeaturedProject}
                            />
                        )}
                    </AnimatePresence>
                </ProjectsContainer>
            </ContentSection>
            {/* Experience */}
            <ContentSection>
                <SectionHeaderContainer>
                    <SectionHeader ref={workContainerRef}>
                        Experience
                    </SectionHeader>
                    <WorkIconsContainer>
                        <GitHubIcon href={professionalLinks.github} />
                        <LinkedInIcon href={professionalLinks.linkedIn} />
                        <TwitterIcon href={professionalLinks.twitter} />
                        <FileIcon href={professionalLinks.resumeFile} />
                    </WorkIconsContainer>
                </SectionHeaderContainer>
                {isWorkXpInView && (
                    <WorkContainer
                        variants={sectionContainerVariants}
                        initial="initial"
                        animate={isWorkXpInView ? 'animate' : 'initial'}
                    >
                        {workExperience.map((experience, index) => (
                            <WorkTile
                                key={experience.title}
                                variants={sectionChildVariants}
                                widthDelay={(index + 1) * 0.6}
                                experience={experience}
                            />
                        ))}
                    </WorkContainer>
                )}
            </ContentSection>
            {/* About Me */}
            <ContentSection>
                <SectionHeader ref={aboutContainerRef}>About Me</SectionHeader>
                <AboutMeContent
                    variants={sectionContainerVariants}
                    initial="initial"
                    animate={isAboutMeInView ? 'animate' : 'initial'}
                >
                    {aboutMe}
                </AboutMeContent>
            </ContentSection>
        </Page>
    );
}

export default HomePage;
