import React from 'react';
import styled from 'styled-components';

import { MePhoto } from '../MePhoto';
import { MyStory } from '../MyStory';

const AboutSectionStyled = styled.section`
    width: 100%;
    min-height: 740px; // Hack to prevent height shift from displacing contact from scroll ref.
    margin-block-end: var(--spg-section);

    display: flex;
    flex-direction: column;
    gap: 64px;
`;

export function AboutSection() {
    return (
        <AboutSectionStyled>
            <MePhoto />
            <MyStory />
        </AboutSectionStyled>
    );
}
