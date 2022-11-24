import React from 'react';
import styled from 'styled-components';

import { aboutMe } from '../content/aboutMe';
import { educationList, experienceList } from '../content/experience';

import { ExperienceRow } from './ExperienceRow/ExperienceRow';
import { FileIcon, LinkedInIcon } from './shared/icons';
import { BodyText, Highlighted, SubHeader } from './shared/typography';

const ExperiencesListContainer = styled.section`
    margin-block-end: var(--spg-section);
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 40px;

    & > div:first-of-type {
        display: flex;
        align-items: center;
        gap: 4px;

        @media screen and (hover: hover) {
            & > a:hover > svg {
                fill: var(--clr-accent);
            }
        }
    }

    & > div:last-child {
        display: flex;
        flex-direction: column;
        gap: 24px;

        & > ul > li {
            list-style: square;
            margin-inline-start: 15px;
        }
    }
`;

const ExperienceList = styled.ul`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 40px;
`;

export function Experiences() {
    return (
        <ExperiencesListContainer>
            <BodyText>
                Below you'll find a list of places I've worked professionally
                and some notable achievements I made while there. You'll also
                see the technologies I used build out features and solve
                problems. Further down you'll also find a list of my
                post-secondary education.
            </BodyText>
            <div>
                <LinkedInIcon
                    href={aboutMe.links.linkedIn}
                    title="LinkedIn"
                    label="LinkedIn"
                />
                <FileIcon
                    href={aboutMe.links.resume}
                    title="Resume"
                    label="Resume"
                />
            </div>
            <ExperienceList>
                {experienceList.length > 0 &&
                    experienceList.map((experience) => (
                        <ExperienceRow
                            key={experience.id}
                            experience={experience}
                        />
                    ))}
            </ExperienceList>
            <div>
                <SubHeader>
                    <Highlighted>Education</Highlighted>
                </SubHeader>
                <ul>
                    {educationList.length > 0 &&
                        educationList.map((education) => {
                            const { endDate, program, school, id } = education;
                            return (
                                <li key={id}>
                                    <BodyText>{`${school} // ${program} // ${endDate}`}</BodyText>
                                </li>
                            );
                        })}
                </ul>
            </div>
        </ExperiencesListContainer>
    );
}
