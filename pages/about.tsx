import React from 'react';
import styled from 'styled-components';

import { Head } from '../src/components/Head/Head';
import { Hero } from '../src/components/Hero';
import { MyStory } from '../src/components/About';

const IntroComments = styled.p`
    width: 100%;
    max-width: 800px;
    line-height: 180%;
    padding: 0 var(--spacing-content-mobile);
    margin-bottom: var(--spacing-margin);

    @media (min-width: 575px) {
        padding: 0 var(--spacing-content);
    }
`;

function About() {
    return (
        <>
            <Head title="Sandrico Provo - About" />
            <Hero
                header={{
                    lineOne: 'About',
                    lineTwo: 'Me.',
                }}
            />
            <IntroComments>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
            </IntroComments>
            <MyStory />
        </>
    );
}

export default About;
