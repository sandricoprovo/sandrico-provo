import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import setup1 from '../../../public/images/setup-1.jpeg';
import {
    FileIcon,
    GitHubIcon,
    LinkedinIcon,
    TwitterIcon,
} from '../Shared/Icons';

const Container = styled.section`
    width: 100%;
    padding: 0 var(--spacing-content-mobile);
    margin-bottom: var(--spacing-margin);

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 40px;

    & > div {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 40px;
    }

    & > div > h2 {
        font-family: var(--font-header);
        font-size: var(--font-xxl);
        color: var(--clr-text);

        & > p {
            font-family: var(--font-display);
            font-size: var(--font-xl);

            & > span {
                color: var(--clr-main);
            }
        }
    }

    & > div > p {
        font-family: var(--font-body);
        font-size: var(--font-base);
        line-height: 180%;
        max-width: 500px;
    }

    & > div > div {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 24px;
    }

    & > div:nth-child(2) {
        position: relative;
        width: 50%;
        min-width: 350px;
        height: 550px;
    }

    @media (min-width: 575px) {
        padding: 0 var(--spacing-content);
    }
`;

export function MyStory() {
    return (
        <Container>
            <div>
                <h2>
                    My
                    <p>
                        Story<span>.</span>
                    </p>
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div>
                    <p>More About Me:</p>
                    <GitHubIcon title="GitHub" href="https://google.ca" />
                    <TwitterIcon title="Twitter" href="https://google.ca" />
                    <LinkedinIcon title="LinkedIn" href="https://google.ca" />
                    <FileIcon title="Resume" href="https://google.ca" />
                </div>
            </div>
            <div>
                <Image src={setup1.src} layout="fill" objectFit="cover" />
            </div>
        </Container>
    );
}
