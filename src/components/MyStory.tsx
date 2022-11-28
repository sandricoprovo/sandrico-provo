import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';

import { ToggleBtn } from './shared/buttons';
import { fadeUp, MOTION_DEFAULTS } from './shared/motions';
import { BodyText, SubHeader } from './shared/typography';

const StoryContainer = styled(motion.div)`
    --spg-gap: 16px;
    display: flex;
    flex-direction: column;
    gap: var(--spg-gap);

    & > div:first-child {
        display: flex;
        align-items: center;
        gap: var(--spg-gap);
    }
`;

const StoryContent = styled.div`
    margin-block-end: 24px;

    column-count: 2;
    column-width: 400px;
    column-gap: 80px;
`;

export function MyStory() {
    const [showFullStory, setShowFullStory] = useState(false);

    const toggleExcerpt = () => setShowFullStory(!showFullStory);

    return (
        <StoryContainer
            variants={fadeUp}
            transition={{
                delay: MOTION_DEFAULTS.DELAY,
                duration: MOTION_DEFAULTS.DURATION,
                ease: MOTION_DEFAULTS.EASE,
            }}
            initial="initial"
            animate="animate"
        >
            <div>
                <SubHeader>My Story</SubHeader>
                <ToggleBtn clickHandler={toggleExcerpt}>
                    {!showFullStory ? 'More' : 'Less'}
                </ToggleBtn>
            </div>
            <StoryContent>
                <BodyText shouldMotion>
                    I enjoy solving problems and bringing benefits through code.
                    But, my journey started with maps, people, and places.
                </BodyText>
                <br />
                {showFullStory && (
                    <>
                        <BodyText shouldMotion motionDelay={0.05}>
                            My path to IT and Software Development wasn't that
                            straightforward. I started my post-secondary
                            education with a Bachelor of Arts in Geography and
                            Sociology. I chose this major/minor combination
                            because I love learning about different places,
                            people, and the perspective that knowledge gives
                            you. After a four-year degree and one related
                            full-time job, I realized that path wasn't for me.
                            However, I never regret that part of my journey. It
                            taught me a lot about communication, collaboration,
                            and the benefits of understanding the perspectives
                            of people, places, and the systems we live in.
                        </BodyText>
                        <br />
                        <BodyText shouldMotion motionDelay={0.1}>
                            My chapter on coding started while I worked at that
                            one full-time job related to my degree. Eventually,
                            I knew I needed and change, and I've always been
                            techy so I decided to learn to code. I would wake up
                            at 5 am every day to practice and learn for 1-1.5
                            hours before work. My first go at learning to code
                            was through completing an online course about HTML,
                            CSS & JavaScript, and by the time I finished this
                            course I was hooked. I loved being able to have an
                            idea and build it. I also loved how this augmented
                            my ability to solve problems. Eventually, I started
                            at NSCC studying Web Programming, completed a
                            four-month CO-OP placement at a local early-stage
                            start-up, and graduated with honours after two
                            years. Now I work as a software developer solving
                            problems with quality code daily. All the while, I
                            still practice in my own time by building small side
                            projects that solve my problems.
                        </BodyText>
                        <br />
                        <BodyText shouldMotion motionDelay={0.15}>
                            I enjoy solving problems, and I also love to learn.
                            These facts about me are significant reasons why I
                            enjoy software development. One of the biggest
                            reasons is because it gives me the skills to solve
                            technical problems that help people and companies. I
                            always love seeing the tangible benefits of what I
                            create.
                        </BodyText>
                        <br />
                        <BodyText shouldMotion motionDelay={0.2}>
                            Currently, my technical skills include creating
                            front-end applications in React, TypeScript,
                            JavaScript, HTML, and CSS while knowing popular
                            libraries and frameworks like Styled Components and
                            NextJS. I have familiarity with back-end
                            technologies and tools including NodeJS, ExpressJS,
                            REST APIs, GraphQL, PostgreSQL, and Prisma. I also
                            use professional collaboration tools such as Git,
                            GitHub, BitBucket, Slack, and JIRA daily.
                        </BodyText>
                    </>
                )}
            </StoryContent>
        </StoryContainer>
    );
}
