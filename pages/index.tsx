import { useRef } from 'react';
import { GetStaticProps } from 'next';

import { apolloClient } from '../src/graphql/apolloClient';
import { GET_HEADER } from '../src/graphql/queries/GET_HEADERS';
import { Payload, Header } from '../src/types';
import Page from '../src/components/Page';
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
    WorkSectionHeader,
    WorkIconsContainer,
    AboutMeContent,
} from '../src/components/HomePage/styles';
import ProjectTile from '../src/components/ProjectTile/ProjectTile';
import WorkTile from '../src/components/WorkTIle/WorkTile';
import {
    FileIcon,
    GitHubIcon,
    LinkedInIcon,
    TwitterIcon,
} from '../src/components/Icons';
import { useInView } from '../src/hooks/useInView';
import { useWindowSize } from '../src/hooks/useWindowSize';

export const getStaticProps: GetStaticProps = async () => {
    const { data }: Payload<'headers', Header[]> = await apolloClient.query({
        query: GET_HEADER,
        variables: { header: 'Header' },
    });

    if (data.headers.length === 1) {
        return {
            props: {
                header: data.headers[0] ?? null,
            },
        };
    }

    return {
        props: {
            headers: data.headers ?? null,
        },
    };
};

const textVariants = {
    // initial: { opacity: 0, y: '50%' },
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
    // initial: { opacity: 0, y: '20%' },
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        // y: '0%',
        y: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1.2,
        },
    },
};

const TEST_ABOUT_ME =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

function HomePage() {
    const projectsContainerRef = useRef<HTMLDivElement>(null);
    const workContainerRef = useRef<HTMLDivElement>(null);
    const aboutContainerRef = useRef<HTMLParagraphElement>(null);
    const { isMobileWidth } = useWindowSize();
    const { isInView: isProjectsInView } = useInView<HTMLDivElement>({
        ref: projectsContainerRef,
        threshold: isMobileWidth ? 5 : 60,
        rootMargin: isMobileWidth ? '41px' : '64px',
        freezeOnceVisible: true,
    });
    const { isInView: isWorkXpInView } = useInView<HTMLDivElement>({
        ref: workContainerRef,
        threshold: isMobileWidth ? 5 : 50,
        rootMargin: isMobileWidth ? '41px' : '64px',
        freezeOnceVisible: true,
    });
    const { isInView: isAboutMeInView } = useInView<HTMLParagraphElement>({
        ref: aboutContainerRef,
        threshold: isMobileWidth ? 5 : 90,
        rootMargin: isMobileWidth ? '41px' : '64px',
        freezeOnceVisible: true,
    });

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
                            delay: 0.7,
                            ease: [0.08, 0.82, 0.17, 1],
                        }}
                    >
                        Great Software.
                    </HeroHeader>
                    <HeroHeader
                        variants={textVariants}
                        initial="initial"
                        animate="animate"
                        transition={{
                            duration: 0.8,
                            delay: 2,
                            ease: [0.08, 0.82, 0.17, 1],
                        }}
                    >
                        Here.
                    </HeroHeader>
                </div>
                <HeroContent>
                    <HeroText
                        // initial={{ opacity: 0, x: '-50%' }}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 1,
                            delay: 2.2,
                            ease: [0.08, 0.82, 0.17, 1],
                        }}
                    >
                        Build. Colab. Create.
                    </HeroText>
                    <HeroImageContainer>IMAGE</HeroImageContainer>
                    <HeroSubHeader
                        // initial={{ opacity: 0, y: '-50%' }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 1.2,
                            ease: [0.08, 0.82, 0.17, 1],
                        }}
                    >
                        SANDRICO PROVO
                    </HeroSubHeader>
                </HeroContent>
            </HeroSection>
            {/* Projects */}
            <ContentSection>
                <SectionHeader ref={projectsContainerRef}>
                    Projects
                </SectionHeader>
                {isProjectsInView && (
                    <ProjectsContainer
                        variants={sectionContainerVariants}
                        initial="initial"
                        animate={isProjectsInView ? 'animate' : 'initial'}
                    >
                        {[1, 2, 3].map((tile, index) => {
                            console.log('here');
                            return (
                                <ProjectTile
                                    key={`projecttile_${index}`}
                                    variants={sectionChildVariants}
                                />
                            );
                        })}
                    </ProjectsContainer>
                )}
            </ContentSection>
            {/* Experience */}
            <ContentSection>
                <WorkSectionHeader>
                    <SectionHeader ref={workContainerRef}>
                        Experience
                    </SectionHeader>
                    <WorkIconsContainer>
                        <GitHubIcon href="https://sandricoprovo.dev" />
                        <LinkedInIcon href="https://sandricoprovo.dev" />
                        <TwitterIcon href="https://sandricoprovo.dev" />
                        <FileIcon href="https://sandricoprovo.dev" />
                    </WorkIconsContainer>
                </WorkSectionHeader>
                {isWorkXpInView && (
                    <WorkContainer
                        variants={sectionContainerVariants}
                        initial="initial"
                        animate={isWorkXpInView ? 'animate' : 'initial'}
                    >
                        <WorkTile variants={sectionChildVariants} />
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
                    {TEST_ABOUT_ME}
                </AboutMeContent>
            </ContentSection>
        </Page>
    );
}

export default HomePage;
