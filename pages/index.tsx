import { useRef, useEffect } from 'react';
import { GetStaticProps } from 'next';
import { useAnimation } from 'framer-motion';

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
    initial: { opacity: 0, y: '50%' },
    animate: { opacity: 1, y: 0 },
};

function HomePage() {
    const rootRef = useRef<HTMLDivElement>(null);
    const { isMobileWidth } = useWindowSize();
    const { isInView: isProjectsInView } = useInView<HTMLDivElement>({
        ref: rootRef,
        threshold: isMobileWidth ? 5 : 30,
        rootMargin: isMobileWidth ? '0px' : '64px',
        freezeOnceVisible: true,
    });
    const projectsAnimation = useAnimation();

    useEffect(() => {
        if (isProjectsInView) {
            projectsAnimation.start({
                y: '0%',
                opacity: 1,
                transition: {
                    duration: 0.7,
                    ease: [0.08, 0.82, 0.17, 1],
                },
            });
        } else {
            projectsAnimation.start({
                y: '5%',
                opacity: 0,
                transition: {
                    duration: 0.7,
                    ease: [0.08, 0.82, 0.17, 1],
                },
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isProjectsInView]);

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
                        initial={{ opacity: 0, x: '-50%' }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 1,
                            delay: 1.2,
                            ease: [0.08, 0.82, 0.17, 1],
                        }}
                    >
                        Build. Colab. Create.
                    </HeroText>
                    <HeroImageContainer>IMAGE</HeroImageContainer>
                    <HeroSubHeader
                        initial={{ opacity: 0, y: '-50%' }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease: [0.08, 0.82, 0.17, 1],
                        }}
                    >
                        SANDRICO PROVO
                    </HeroSubHeader>
                </HeroContent>
            </HeroSection>
            {/* Projects */}
            <ContentSection>
                <SectionHeader>Projects</SectionHeader>
                <ProjectsContainer ref={rootRef} animate={projectsAnimation}>
                    <ProjectTile />
                    <ProjectTile />
                    <ProjectTile />
                </ProjectsContainer>
            </ContentSection>
            {/* Experience */}
            <ContentSection>
                <WorkSectionHeader>
                    <SectionHeader>Experience</SectionHeader>
                    <WorkIconsContainer>
                        <GitHubIcon href="https://sandricoprovo.dev" />
                        <LinkedInIcon href="https://sandricoprovo.dev" />
                        <TwitterIcon href="https://sandricoprovo.dev" />
                        <FileIcon href="https://sandricoprovo.dev" />
                    </WorkIconsContainer>
                </WorkSectionHeader>
                <WorkContainer>
                    <WorkTile />
                </WorkContainer>
            </ContentSection>
            {/* About Me */}
            <ContentSection>
                <SectionHeader>About Me</SectionHeader>
                <AboutMeContent>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    seddo eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, seddo eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, seddo eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </AboutMeContent>
            </ContentSection>
        </Page>
    );
}

export default HomePage;
