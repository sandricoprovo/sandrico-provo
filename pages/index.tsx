import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import setup1 from '../public/images/setup-1.jpeg';

import { Head } from '../src/components/Head/Head';
import { Hero } from '../src/components/Hero/Hero';
import { ShortAbout, WorkPreview } from '../src/components/Home';

const ImageContainer = styled.section`
    position: relative;
    width: 100%;
    height: 500px;
    margin-bottom: var(--spacing-margin);

    & > div {
        position: relative;
        width: 100%;
        height: 100%;
    }
`;

function Home() {
    return (
        <>
            <Head title="Sandrico Provo - Software Engineer" />
            <Hero
                overline="Hey, I'm Sandrico. I'm a"
                header="Software Engineer"
            />
            <ImageContainer>
                <div>
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
