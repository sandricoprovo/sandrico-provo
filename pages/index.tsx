import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import setup1 from '../public/images/setup-1.jpeg';

import { Head } from '../src/components/Head/Head';
import { Hero } from '../src/components/Hero';
import { ShortAbout, WorkPreview } from '../src/components/Home';
import { useScrollPosition } from '../src/hooks/useScrollPosition';

const ImageContainer = styled.section`
    position: relative;
    width: 100%;
    height: 400px;
    margin-bottom: var(--spacing-margin);

    & > div {
        position: relative;
        width: 100%;
        height: 100%;
    }
`;

function Home() {
    const imageScrollPosition = useScrollPosition(-0.5);

    return (
        <>
            <Head title="Sandrico Provo - Software Engineer" />
            <Hero
                header={{
                    overline: "Hey, I'm",
                    lineOne: 'San',
                    lineTwo: 'dri',
                    lineThree: 'co',
                }}
                showContent
            />
            <ImageContainer>
                <div
                    style={{
                        transform: `translateX(calc(24vw + ${imageScrollPosition}px))`,
                    }}
                >
                    <Image
                        src={setup1.src}
                        layout="fill"
                        objectFit="cover"
                        quality={95}
                        alt="My setup including the monitor, laptop, desk map, docking station, mouse and other items."
                    />
                </div>
            </ImageContainer>
            <ShortAbout />
            <WorkPreview />
        </>
    );
}

export default Home;
