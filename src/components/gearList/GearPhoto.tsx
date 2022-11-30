import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { gear } from '../../content/gear';
import { fadeUp, MOTION_DEFAULTS } from '../shared/motions';

const ImageContainer = styled(motion.div)`
    position: relative;
    min-width: 300px;
    max-width: 100%;
    height: 600px;
    background-color: var(--clr-project-img-background);
    border-radius: var(--br-image);
    overflow: hidden;

    & img {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
        object-position: center;
        transition: transform 0.3s var(--easing-hover);
    }
`;

export function GearPhoto() {
    const {
        photo: { alt, src },
    } = gear;

    return (
        <ImageContainer
            variants={fadeUp}
            transition={{
                delay: MOTION_DEFAULTS.DELAY,
                duration: MOTION_DEFAULTS.DURATION,
                ease: MOTION_DEFAULTS.EASE,
            }}
            initial="initial"
            animate="animate"
        >
            <Image
                src={src}
                alt={alt}
                placeholder="blur"
                blurDataURL={src.blurDataURL}
                loading="eager"
            />
        </ImageContainer>
    );
}
