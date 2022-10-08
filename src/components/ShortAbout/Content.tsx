import React from 'react';
import styled from 'styled-components';
import { GoToBtn } from '../Buttons';
import { Header } from './Header';

const Container = styled.div`
    width: 100%;
    height: 100%;
    min-width: 300px;
    max-width: 500px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;

    & > p {
        line-height: 160%;
    }
`;

export function Content() {
    return (
        <Container>
            <Header />
            <p>
                My path to IT and Software Development wasn't that
                straightforward. I started my post-secondary education with a
                Bachelor of Arts in Geography and Sociology. However, my chapter
                on coding started while I worked a full-time job related to my
                degree. Eventually, I knew I needed a change and I've always
                been techy so I decided to learn to code. I started out
                self-taught, waking up at 5am every day to practice and learn
                for 1-1.5 hours before work. Then I went to NSCC and got a
                diploma with honours in IT.
                <br /> <br />
                These days I work as a Software Engineer at a local company
                writing React and TypeScript daily. If you've enjoyed a snapshot
                of my story, you can read more about it below.
            </p>
            <GoToBtn href="/about" label="More About Me" />
        </Container>
    );
}
