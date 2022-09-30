import React from 'react';
import styled from 'styled-components';

import { Head } from '../src/components/Head/Head';
import { Hero } from '../src/components/Hero';
import { MyStory, WorkExperience } from '../src/components/About';
import { DetailBlock } from '../src/components/DetailBlock';

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

const DetailsBlockContainer = styled.section`
    padding: 0 var(--spacing-content-mobile);
    margin-bottom: var(--spacing-margin);

    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 160px;

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
            <WorkExperience />
            <DetailsBlockContainer>
                <DetailBlock />
                <DetailBlock />
                <DetailBlock />
            </DetailsBlockContainer>
        </>
    );
}

export default About;
