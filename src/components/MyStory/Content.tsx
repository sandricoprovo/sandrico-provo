import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 64px;
`;

const ContentStyled = styled.p`
    font-family: var(--font-body);
    font-size: var(--font-base);
    line-height: 180%;
    max-width: 600px;
`;

export function Content() {
    return (
        <Container>
            <ContentStyled>
                I enjoy solving problems and bringing benefits through code.
                But, my journey started with maps, people, and places.
                <br />
                <br />
                My chapter on coding started while I worked at that one
                full-time job related to my degree. Eventually, I knew I needed
                and change, and I've always been techy so I decided to learn to
                code. I would wake up at 5 am every day to practice and learn
                for 1-1.5 hours before work. My first go at learning to code was
                through completing an online course about HTML, CSS &
                JavaScript, and by the time I finished this course I was hooked.
                I loved being able to have an idea and build it. I also loved
                how this augmented my ability to solve problems. Eventually, I
                started at NSCC studying Web Programming, completed a four-month
                CO-OP placement at a local early-stage start-up, and graduated
                with honours after two years.
            </ContentStyled>
            <ContentStyled>
                Now I work as a software developer solving problems with quality
                code daily. All the while, I still practice in my own time by
                building small side projects that solve my problems. I enjoy
                solving problems, and I also love to learn. These facts about me
                are significant reasons why I enjoy software development. One of
                the biggest reasons is because it gives me the skills to solve
                technical problems that help people and companies. I always love
                seeing the tangible benefits of what I create.
                <br />
                <br />
                Currently, my technical skills include creating front-end
                applications in React, TypeScript, JavaScript, HTML, and CSS
                while knowing popular libraries and frameworks like Styled
                Components and NextJS. I also have confidence in using back-end
                technologies and tools including NodeJS, ExpressJS, REST APIs,
                GraphQL, PostgreSQL, and Prisma. I also use professional
                collaboration tools such as Git, GitHub, BitBucket, Slack, and
                JIRA daily.
            </ContentStyled>
        </Container>
    );
}
