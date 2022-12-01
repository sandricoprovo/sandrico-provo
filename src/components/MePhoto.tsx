import React, { useRef } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { useInView } from '../hooks/useInView';
import { aboutMe } from '../content/aboutMe';

import { fadeUp, MOTION_DEFAULTS } from './shared/motions';

const ImageContainer = styled(motion.div)`
    position: relative;
    min-width: 300px;
    max-width: 500px;
    height: 525px;
    background-color: var(--clr-project-img-background);
    border-radius: var(--br-image);
    overflow: hidden;
`;

const ImageStyled = styled(Image)`
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    object-position: bottom;
    transition: transform 0.3s var(--easing-hover);
`;

export function MePhoto() {
    const {
        photo: { alt, src },
    } = aboutMe;
    const imgRef = useRef<HTMLDivElement>(null);
    const isInView: boolean = useInView<HTMLDivElement | null>(imgRef, {
        triggerOnce: true,
        threshold: 1,
        rootMargin: '200px',
    });

    return (
        <motion.div ref={imgRef}>
            {isInView && (
                <ImageContainer
                    variants={fadeUp}
                    transition={{
                        delay: 0.3,
                        duration: MOTION_DEFAULTS.DURATION,
                        ease: MOTION_DEFAULTS.EASE,
                    }}
                    initial="initial"
                    animate="animate"
                >
                    <ImageStyled
                        src={src}
                        alt={alt}
                        placeholder="blur"
                        blurDataURL={src.blurDataURL}
                    />
                </ImageContainer>
            )}
        </motion.div>
    );
}
