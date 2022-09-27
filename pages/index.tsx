import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import setup1 from '../public/images/setup-1.jpeg';

import { Head } from '../src/components/Head/Head';
import { Hero, ShortAbout, WorkPreview } from '../src/components/Home';
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
            <Head title="Sandrico Provo - Software Developer" />
            <Hero />
            <ImageContainer>
                <div
                    style={{
                        transform: `translateX(calc(24vw + ${imageScrollPosition}px))`,
                    }}
                >
                    <Image src={setup1.src} layout="fill" objectFit="cover" />
                </div>
            </ImageContainer>
            <ShortAbout />
            <WorkPreview />
        </>
    );
}

export default Home;
