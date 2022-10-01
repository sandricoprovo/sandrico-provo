import React from 'react';
import styled from 'styled-components';

import { Head } from '../src/components/Head/Head';
import { Hero } from '../src/components/Hero';
import { GearTile, GearTilesContainer } from '../src/components/Uses';

const IntroComments = styled.section`
    width: 70%;
    min-width: 350px;
    padding: 0 var(--spacing-content-mobile);
    margin-bottom: calc(var(--spacing-margin) / 2);

    & > p {
        color: var(--clr-text);
    }

    @media (min-width: 575px) {
        padding: 0 var(--spacing-content);
    }
`;

function Uses() {
    return (
        <>
            <Head title="Sandrico Provo - /uses" />
            <Hero
                header={{
                    lineOne: '/uses',
                }}
            />
            <IntroComments>
                <p>
                    Mi eget mauris pharetra et ultrices neque ornare. Nisl nunc
                    mi ipsum faucibus vitae aliquet. Massa id neque aliquam
                    vestibulum morbi blandit cursus risus at.
                </p>
            </IntroComments>
            <GearTilesContainer>
                <GearTile />
            </GearTilesContainer>
        </>
    );
}

export default Uses;
