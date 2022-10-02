import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { myInfo } from '../../content/myInfo';
import { GoToBtn } from '../Buttons';

const ShortAboutStyled = styled.section`
    width: 100%;
    margin-bottom: var(--spacing-margin);
    padding: 0 var(--spacing-content-mobile);

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 104px;

    & > div:nth-child(1) {
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
    }

    & > div:nth-child(2) {
        width: 100%;
        min-width: 300px;
        max-width: 500px;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        gap: 40px;

        & > h2 {
            font-family: var(--font-header);
            font-size: var(--font-xl);
            line-height: 100%;
        }

        & > div > p {
            line-height: 160%;
        }

        & > h2 > span {
            font-family: var(--font-display);
        }

        & > h2 > span > span {
            font-family: var(--font-display);
            color: var(--clr-main);
        }

        & > a {
            color: var(--clr-text);
            text-decoration: none;
        }
    }

    @media (min-width: 575px) {
        padding: 0 var(--spacing-content);
    }
`;

export function ShortAbout() {
    return (
        <ShortAboutStyled>
            <div>
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
            </div>
            <div>
                <h2>
                    A little <br />
                    <span>
                        About Me<span>.</span>
                    </span>
                </h2>
                <div>
                    <p>
                        My path to IT and Software Development wasn't that
                        straightforward. I started my post-secondary education
                        with a Bachelor of Arts in Geography and Sociology.
                        However, my chapter on coding started while I worked a
                        full-time job related to my degree. Eventually, I knew I
                        needed a change and I've always been techy so I decided
                        to learn to code. I started out self-taught, waking up
                        at 5am every day to practice and learn for 1-1.5 hours
                        before work. Then I went to NSCC and got a diploma with
                        honours in IT.
                        <br /> <br />
                        These days I work as a Software Engineer at a local
                        company writing React and TypeScript daily. If you've
                        enjoyed a snapshot of my story, you can read more about
                        it below.
                    </p>
                </div>
                <GoToBtn href="/about" label="More About Me" />
            </div>
        </ShortAboutStyled>
    );
}
