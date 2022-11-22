import React from 'react';

import { HeroSection } from '../src/components/containers/HeroSection';
import { ProjectCards } from '../src/components/containers/ProjectCards';
import { AboutSection } from '../src/components/containers/AboutSection';
import { ProjectCard } from '../src/components/ProjectCard';
import { TextLink } from '../src/components/shared/buttons';
import {
    Header1,
    BodyText,
    Highlighted,
} from '../src/components/shared/typography';
import { orderedProjects } from '../src/content/projectsList';
import { MePhoto } from '../src/components/MePhoto';

function HomePage() {
    return (
        <>
            <HeroSection>
                <Header1>Hey, I'm Sandrico</Header1>
                <BodyText>
                    I'm a <Highlighted accent>Software Developer</Highlighted>.
                    I solve problems on the web by building appealing,
                    data-driven experiences. My skill set is{' '}
                    <Highlighted accent>front-end focused</Highlighted>, but I{' '}
                    <Highlighted accent>also bring back-end skills</Highlighted>{' '}
                    as well. If you'd like to get in touch with me, use the{' '}
                    <TextLink href="#contact_form">contact form</TextLink> below
                    to get in touch.
                </BodyText>
            </HeroSection>
            <ProjectCards>
                {orderedProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </ProjectCards>
            <AboutSection>
                <MePhoto />
            </AboutSection>
        </>
    );
}

export default HomePage;
