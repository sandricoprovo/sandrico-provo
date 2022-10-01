import React from 'react';
import Image, { StaticImageData } from 'next/image';
import styled from 'styled-components';
import { GoToBtn } from '../Buttons';

const ProjectSmallStyled = styled.div`
    flex-grow: 1;
    max-width: 700px;
    height: 500px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 40px;

    & > div:nth-of-type(1) {
        width: 100%;
        height: 80%;
        position: relative;
    }

    & > div:nth-of-type(2) {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    & > div:nth-of-type(2) > p {
        width: 50%;
        min-width: 200px;
        font-family: var(--font-display);
        font-size: var(--font-md);
        color: var(--clr-text);
    }

    & > div:nth-of-type(2) > a {
        font-size: var(--font-base);
        color: var(--clr-text);
        text-decoration: none;
    }
`;

interface ProjectSmallProps {
    image: StaticImageData;
    name: string;
}

export function ProjectSmall({ image, name }: ProjectSmallProps) {
    return (
        <ProjectSmallStyled>
            <div>
                <Image src={image.src} layout="fill" objectFit="cover" />
            </div>
            <div>
                <p>{name}</p>
                <GoToBtn href="/projects" label="More" />
            </div>
        </ProjectSmallStyled>
    );
}
