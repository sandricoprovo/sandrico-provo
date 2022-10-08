import React from 'react';
import styled from 'styled-components';
import { AboutImage } from './AboutImage';
import { Content } from './Content';

const ShortAboutStyled = styled.section`
    width: 100%;
    margin-bottom: var(--spacing-margin);
    padding: 0 var(--spacing-content-mobile);

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 64px;

    @media (min-width: 575px) {
        padding: 0 var(--spacing-content);
    }
`;

export function ShortAbout() {
    return (
        <ShortAboutStyled>
            <AboutImage />
            <Content />
        </ShortAboutStyled>
    );
}
