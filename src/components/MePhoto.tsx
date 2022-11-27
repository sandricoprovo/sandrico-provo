import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { aboutMe } from '../content/aboutMe';

const ImageContainer = styled.div`
    position: relative;
    min-width: 300px;
    max-width: 500px;
    height: 525px;
    background-color: var(--clr-project-img-background);
    border-radius: var(--br-image);
    overflow: hidden;

    & img {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
        object-position: bottom;
        transition: transform 0.3s var(--easing-hover);
    }
`;

export function MePhoto() {
    const {
        photo: { alt, src },
    } = aboutMe;

    return (
        <ImageContainer>
            <Image
                src={src}
                alt={alt}
                placeholder="blur"
                blurDataURL={src.blurDataURL}
            />
        </ImageContainer>
    );
}
