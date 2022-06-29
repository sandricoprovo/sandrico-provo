import { useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

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

const projectsLists = [
    { index: 0, label: 'TEST-1' },
    { index: 1, label: 'TEST_2' },
    { index: 2, label: 'TEST_3' },
];

function HomePage() {
    const [featuredProject, setFeaturedProject] = useState(projectsLists[0]);
    const debouncedFeaturedProject = useDebounce<{
        index: number;
        label: string;
    }>(featuredProject, 500);

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
        const selectedProject = projectsLists[index];
        if (!selectedProject) return;
        setFeaturedProject(selectedProject);
    }

    function moveToNext() {
        console.log('Switching to next Project...');
        const nextProject = projectsLists[featuredProject.index + 1];
        if (!nextProject) return;
        setFeaturedProject(nextProject);
    }

    function moveToPrevious() {
        console.log('Switching to Previous Project...');
        const previousProject = projectsLists[featuredProject.index - 1];
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
                        IMAGE
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
                                projectsLists.length - 1,
                            currentPosition: debouncedFeaturedProject.index + 1,
                            total: projectsLists.length,
                        }}
                        handlers={{
                            moveToNext,
                            moveToPrevious,
                            moveToStart: () => moveToPosition(0),
                            moveToEnd: () =>
                                moveToPosition(projectsLists.length - 1),
                        }}
                    />
                </SectionHeaderContainer>
                <ProjectsContainer ref={projectsContainerRef}>
                    <AnimatePresence exitBeforeEnter>
                        {isProjectsInView && (
                            <ProjectTile
                                key={debouncedFeaturedProject.label}
                                isProjectsInView={isProjectsInView}
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
                        <GitHubIcon href="https://sandricoprovo.dev" />
                        <LinkedInIcon href="https://sandricoprovo.dev" />
                        <TwitterIcon href="https://sandricoprovo.dev" />
                        <FileIcon href="https://sandricoprovo.dev" />
                    </WorkIconsContainer>
                </SectionHeaderContainer>
                {isWorkXpInView && (
                    <WorkContainer
                        variants={sectionContainerVariants}
                        initial="initial"
                        animate={isWorkXpInView ? 'animate' : 'initial'}
                    >
                        {[1, 2, 3].map((workTile, index) => (
                            <WorkTile
                                variants={sectionChildVariants}
                                widthDelay={(index + 1) * 0.6}
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
                    I consider myself a career changer. Before I knew what
                    JavaScript was I focused on using my Geography and Sociology
                    degree. I got this degree in January of 2017, and for just
                    over a year I worked as a contract library assistant and a
                    retail store employee. By early 2018 I had moved onto a
                    contract position as a Land Surveying Assistant which was
                    more related to my degree, but after a few months of working
                    this job and looking at my other options I realized I needed
                    a change. My coding journey started in the summer of 2018
                    when I bought my first MacBook. The first two things I did
                    was download Visual Studio Code and buy a programming course
                    on Udemy so I could start learning. At this point I was
                    still working full time, so I would get up at 5am Monday
                    through Friday to work on the course before my day job
                    started. After a few months I had finished the course, and
                    by this point I knew coding was going to be my career.
                    Knowing I wanted to make this switch into tech, I applied
                    and got into NSCC's two year IT Web Programming course. In
                    this course I learned about frontend and backend
                    technologies, best practices, problem solving, and other
                    topics. All the while I was still building small projects in
                    my free time that interested me or solved a problem I had.
                    Fast forward to today I'm in industry, solving problems
                    daily, and writing quality production code. I think peoples'
                    stories can say a lot about them. If my story sounds
                    interesting to you and you'd like to connect to chat more
                    about it, or if you think I might be a fit for an
                    opportunity you have please reach out via my contact page.
                </AboutMeContent>
            </ContentSection>
        </Page>
    );
}

export default HomePage;
