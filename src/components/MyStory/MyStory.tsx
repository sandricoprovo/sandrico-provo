import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { myInfo } from '../../content/myInfo';

import { Header } from './Header';
import { Content } from './Content';
import {
    FileIcon,
    GitHubIcon,
    LinkedinIcon,
    TwitterIcon,
} from '../Shared/Icons';
import { GoToBtn } from '../Buttons';
import Links from './Links';

const Container = styled.section`
    width: 100%;
    padding: 0 var(--spacing-content-mobile);
    margin-bottom: calc(var(--spacing-margin) / 2);

    display: flex;
    flex-direction: column;
    gap: 64px;

    /* Component specific image container */
    & > div:nth-of-type(1) {
        position: relative;
        width: 100%;
        min-width: 350px;
        aspect-ratio: 1/1;
        max-height: 500px;
    }

    @media (min-width: 575px) {
        padding: 0 var(--spacing-content);
    }
`;

export function MyStory() {
    return (
        <Container>
            <div>
                <Image
                    src={myInfo.photo.src}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="0% 50%"
                    alt={myInfo.photoAlt}
                    quality={100}
                />
            </div>
            <Header />
            <Content />
            <Links>
                <GitHubIcon title="GitHub" href={myInfo.links.github} />
                <TwitterIcon title="Twitter" href={myInfo.links.twitter} />
                <LinkedinIcon title="LinkedIn" href={myInfo.links.linkedIn} />
                <FileIcon title="Resume" href={myInfo.links.resume} />
                <GoToBtn
                    href="https://www.nscc.ca/about/news/stories/2022/a-new-career-in-tech.asp"
                    label="My College Did A Story on Me"
                    isExternal
                />
            </Links>
        </Container>
    );
}
