import React from 'react';
import styled from 'styled-components';

import { Head } from '../src/components/Head/Head';
import { MyStory, WorkExperience } from '../src/components/About';
import { DetailBlock } from '../src/components/DetailBlock';
import { myInfo } from '../src/content/myInfo';
import { HeroContainer } from '../src/components/Hero/HeroContainer';
import { HeroHeader } from '../src/components/Hero/HeroHeader';

const DetailsBlockContainer = styled.section`
    padding: 0 var(--spacing-content-mobile);
    margin-bottom: var(--spacing-margin);

    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 160px;

    @media (min-width: 575px) {
        padding: 0 var(--spacing-content);
    }
`;

function About() {
    return (
        <>
            <Head title="Sandrico Provo - About" />
            <HeroContainer>
                <HeroHeader content="About" />
            </HeroContainer>
            <MyStory />
            <WorkExperience />
            <DetailsBlockContainer>
                <DetailBlock
                    label="Education"
                    listDirection="column"
                    list={myInfo.education}
                />
                <DetailBlock
                    label="Skills"
                    listDirection="row"
                    list={myInfo.techSkills}
                />
            </DetailsBlockContainer>
        </>
    );
}

export default About;
