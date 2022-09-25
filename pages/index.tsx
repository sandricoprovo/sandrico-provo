import React, { MutableRefObject, useRef } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import setup1 from '../public/images/setup-1.jpeg';
import { useInView } from '../src/hooks/useInView';

import { Head } from '../src/components/Head/Head';
import { Hero } from '../src/components/Home/Hero';

const ImageContainer = styled.section`
    position: relative;
    width: 100%;
    height: 300px;
    margin: 120px 0;

    // TODO: convert this to a motion component to animate exits
    & > div {
        width: 100%;
        height: 100%;
        transform: translateX(-100vw);

        animation-name: slideImageOver;
        animation-duration: 1s;
        animation-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96);
        animation-fill-mode: forwards;
        animation-delay: 0.4s;

        @keyframes slideImageOver {
            from {
                transform: translateX(-100vw);
            }
            to {
                transform: translateX(0);
            }
        }
    }
`;

function Home() {
    const imageRef: MutableRefObject<any> = useRef<HTMLDivElement>();
    const isInView: boolean = useInView<HTMLDivElement | any>(
        imageRef,
        '-200px'
    );

    return (
        <>
            <Head title="Sandrico Provo - Software Developer" />
            <Hero />
            <ImageContainer ref={imageRef}>
                {isInView && (
                    <div>
                        <Image
                            src={setup1.src}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                )}
            </ImageContainer>
        </>
    );
}

export default Home;
