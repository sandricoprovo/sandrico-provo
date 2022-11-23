import React from 'react';

import { HeroSection } from '../src/components/containers/HeroSection';
import { AboutSection } from '../src/components/containers/AboutSection';
import { TextLink } from '../src/components/shared/buttons';
import { ExperienceTabs } from '../src/components/containers/ExperienceTabs';
import {
    Header1,
    BodyText,
    Highlighted,
} from '../src/components/shared/typography';
import { MePhoto } from '../src/components/MePhoto';
import { MyStory } from '../src/components/MyStory';

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
            <ExperienceTabs />
            <AboutSection>
                <MePhoto />
                {/* TODO:
                    - Add contact inks (Twitter, GitHub, LinkedIn, resume)
                */}
                <MyStory />
            </AboutSection>
        </>
    );
}

export default HomePage;
