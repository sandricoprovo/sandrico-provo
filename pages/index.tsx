import React from 'react';

import { HeroSection } from '../src/components/containers/HeroSection';
import { AboutSection } from '../src/components/containers/AboutSection';
import { TextLink } from '../src/components/shared/buttons';
import { ExperienceSection } from '../src/components/experiences/ExperienceSection';
import {
    Header1,
    BodyText,
    Highlighted,
} from '../src/components/shared/typography';
import { MePhoto } from '../src/components/MePhoto';
import { MyStory } from '../src/components/MyStory';
import { ContactForm } from '../src/components/contactForm/ContactForm';
import { Head } from '../src/components/Head';
import { TechStack } from '../src/components/TechStack';

function HomePage() {
    return (
        <>
            <Head title="Sandrico Provo - Software Developer" />
            <HeroSection>
                <Header1 shouldMotion>Hey, I'm Sandrico</Header1>
                <BodyText shouldMotion>
                    I'm a <Highlighted accent>Software Developer</Highlighted>{' '}
                    from Nova Scotia, Canada 🇨🇦. My skill set is{' '}
                    <Highlighted accent>front-end focused</Highlighted>, but I{' '}
                    <Highlighted accent>also bring back-end skills</Highlighted>
                    {'. '} You can see a list of technologies and tools I use
                    below. If you'd like to get in touch with me, use the{' '}
                    <TextLink href="#contact_form">contact form</TextLink> below
                    to get in touch.
                </BodyText>
                <TechStack />
            </HeroSection>
            <ExperienceSection />
            <AboutSection>
                <MePhoto />
                <MyStory />
            </AboutSection>
            <ContactForm />
        </>
    );
}

export default HomePage;
