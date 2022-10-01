import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { myInfo } from '../../content/myInfo';
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
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;

    & > p:nth-child(1) {
        font-family: var(--font-display);
        color: var(--clr-text);
        font-size: var(--font-lg);
    }

    & > div:nth-of-type(1) {
        position: relative;
        width: 100%;
        min-width: 350px;
        height: 550px;
        margin-bottom: 64px;
    }

    & > div:nth-of-type(1) {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 40px;
    }

    & > div:nth-of-type(2) > h2 {
        font-family: var(--font-header);
        color: var(--clr-text);
        font-size: var(--font-xxl);
        margin-bottom: 64px;

        & > p {
            font-family: var(--font-display);
            font-size: var(--font-xl);

            & > span {
                color: var(--clr-main);
            }
        }
    }

    & > div:nth-of-type(2) > p {
        font-family: var(--font-body);
        font-size: var(--font-base);
        line-height: 180%;
        max-width: 800px;
    }

    & > div:nth-of-type(2) > div {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 24px;
    }

    & > div:nth-of-type(3) {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 24px;
    }

    @media (min-width: 575px) {
        padding: 0 var(--spacing-content);
    }
`;

export function MyStory() {
    return (
        <Container>
            <p>Hey, I'm Sandrico Provo.</p>
            <div>
                <Image src={myInfo.photo.src} layout="fill" objectFit="cover" />
            </div>
            <div>
                <h2>
                    My
                    <p>
                        Story<span>.</span>
                    </p>
                </h2>
                <p>
                    I enjoy solving problems and bringing benefits through code.
                    But, my journey started with maps, people, and places.
                    <br />
                    <br />
                    My chapter on coding started while I worked at that one
                    full-time job related to my degree. Eventually, I knew I
                    needed and change, and I've always been techy so I decided
                    to learn to code. I would wake up at 5 am every day to
                    practice and learn for 1-1.5 hours before work. My first go
                    at learning to code was through completing an online course
                    about HTML, CSS & JavaScript, and by the time I finished
                    this course I was hooked. I loved being able to have an idea
                    and build it. I also loved how this augmented my ability to
                    solve problems. Eventually, I started at NSCC studying Web
                    Programming, completed a four-month CO-OP placement at a
                    local early-stage start-up, and graduated with honours after
                    two years. Now I work as a software developer solving
                    problems with quality code daily. All the while, I still
                    practice in my own time by building small side projects that
                    solve my problems.
                    <br />
                    <br />
                    I enjoy solving problems, and I also love to learn. These
                    facts about me are significant reasons why I enjoy software
                    development. One of the biggest reasons is because it gives
                    me the skills to solve technical problems that help people
                    and companies. I always love seeing the tangible benefits of
                    what I create.
                    <br />
                    <br />
                    Currently, my technical skills include creating front-end
                    applications in React, TypeScript, JavaScript, HTML, and CSS
                    while knowing popular libraries and frameworks like Styled
                    Components and NextJS. I have familiarity with back-end
                    technologies and tools including NodeJS, ExpressJS, REST
                    APIs, GraphQL, PostgreSQL, and Prisma. I also use
                    professional collaboration tools such as Git, GitHub,
                    BitBucket, Slack, and JIRA daily.
                </p>
            </div>
            <div>
                <p>More :</p>
                <GitHubIcon title="GitHub" href={myInfo.links.github} />
                <TwitterIcon title="Twitter" href={myInfo.links.twitter} />
                <LinkedinIcon title="LinkedIn" href={myInfo.links.linkedIn} />
                <FileIcon title="Resume" href={myInfo.links.resume} />
            </div>
        </Container>
    );
}
