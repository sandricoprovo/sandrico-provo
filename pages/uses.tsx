import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import setupVertical from '../public/images/setup-vertical.jpg';
import { Head } from '../src/components/Head/Head';
import { Hero } from '../src/components/Hero/Hero';
import { GearTile, GearTilesContainer } from '../src/components/Uses';
import { setupGear } from '../src/content/setupGear';

const IntroComments = styled.section`
    width: 70%;
    min-width: 350px;
    padding: 0 var(--spacing-content-mobile);
    margin-bottom: calc(var(--spacing-margin) / 2);

    & > p {
        color: var(--clr-text);
        line-height: 180%;
    }

    @media (min-width: 575px) {
        padding: 0 var(--spacing-content);
    }
`;

const SetupImageContainer = styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 9 / 12;
    margin: 0 auto;
    padding: 0 var(--spacing-content-mobile);
    margin-bottom: var(--spacing-margin);

    @media (min-width: 575px) {
        width: 80%;
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
            <SetupImageContainer>
                <Image
                    src={setupVertical.src}
                    layout="fill"
                    objectFit="cover"
                    priority
                    alt="My setup including the monitor, laptop, desk map, docking station, mouse and other items."
                />
            </SetupImageContainer>
            <IntroComments>
                <p>
                    This page is dedicated to detailing all of the gear, apps,
                    and other essentials that I use to get my work done and stay
                    productive. It’s really just for fun! If you’ve seen me use
                    something and are curious about what it is, you will most
                    likely find it here. If not, feel free to reach out to me on
                    Twitter and ask 😄.
                </p>
            </IntroComments>
            <GearTilesContainer>
                {setupGear.map((category) => (
                    <GearTile label={category.label} gear={category.gear} />
                ))}
            </GearTilesContainer>
        </>
    );
}

export default Uses;
