import React from 'react';

import { HeroSection } from '../src/components/containers/HeroSection';
import { AboutSection } from '../src/components/containers/AboutSection';
import { ContactBtn } from '../src/components/shared/buttons';
import {
    Header1,
    BodyText,
    Highlighted,
} from '../src/components/shared/typography';
import { ContactForm } from '../src/components/contactForm/ContactForm';
import { Head } from '../src/components/Head';
import { TechStack } from '../src/components/TechStack';
import { Experiences } from '../src/components/experiences/Experiences';
import { useRefsContext } from '../src/contexts/refsContext';
import { Projects } from '../src/components/projects/Projects';

function HomePage() {
    const { contactFormRef, scrollToRef } = useRefsContext();

    return (
        <>
            <Head title="Sandrico Provo - Software Developer" />
            <HeroSection>
                <Header1 shouldMotion>Hey, I'm Sandrico</Header1>
                <BodyText shouldMotion>
                    I'm a <Highlighted accent>Software Developer</Highlighted>{' '}
                    from Nova Scotia, Canada 🇨🇦. My skill set is{' '}
                    <Highlighted accent>specialized in front-end</Highlighted>{' '}
                    technologies, but I{' '}
                    <Highlighted accent>also bring back-end skills</Highlighted>
                    {'. '} You can see a list of technologies and tools I use
                    below. If you'd like to get in touch, use the say hello
                    button to go to my contact form.
                </BodyText>
                <TechStack />
                <ContactBtn clickHandler={() => scrollToRef(contactFormRef)}>
                    Say Hello 👋🏾
                </ContactBtn>
            </HeroSection>
            <Experiences />
            <Projects />
            <AboutSection />
            <ContactForm scrollRef={contactFormRef} />
        </>
    );
}

export default HomePage;
