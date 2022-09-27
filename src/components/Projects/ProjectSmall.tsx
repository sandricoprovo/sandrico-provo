import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import setup1 from '../../../public/images/setup-1.jpeg';
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

export function ProjectSmall() {
    return (
        <ProjectSmallStyled>
            <div>
                <Image src={setup1.src} layout="fill" objectFit="cover" />
            </div>
            <div>
                <p>Project One One One One</p>
                <GoToBtn href="/projects" label="More" />
            </div>
        </ProjectSmallStyled>
    );
}
