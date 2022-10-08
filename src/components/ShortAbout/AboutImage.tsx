import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { myInfo } from '../../content/myInfo';

const Container = styled.div`
    width: 100%;
    min-width: 300px;
    max-width: 600px;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 16px;

    & > p {
        font-size: var(--font-base);
        font-family: var(--font-display);
        writing-mode: vertical-rl;
        transform: rotate(180deg);
    }

    & > div {
        position: relative;
        width: 100%;
        height: 100%;

        & > div {
            position: relative;
            height: 100%;
        }
    }
`;

export function AboutImage() {
    return (
        <Container>
            <p>{myInfo.title}</p>
            <div>
                <Image
                    src={myInfo.photo.src}
                    alt={myInfo.photoAlt}
                    layout="responsive"
                    blurDataURL={myInfo.photo.blurDataURL}
                    width={100}
                    height={100}
                    objectFit="cover"
                    placeholder="blur"
                    quality={95}
                />
            </div>
        </Container>
    );
}
