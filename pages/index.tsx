import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import setup1 from '../public/images/setup-1.jpeg';

import { Head } from '../src/components/Head/Head';
import { Hero } from '../src/components/Home/Hero';

const ImageContainer = styled.section`
    position: relative;
    width: 100%;
    height: 300px;
    margin: 120px 0;
`;

function Home() {
    return (
        <>
            <Head title="Sandrico Provo - Software Developer" />
            <Hero />
            <ImageContainer>
                <Image src={setup1.src} layout="fill" objectFit="cover" />
            </ImageContainer>
        </>
    );
}

export default Home;
