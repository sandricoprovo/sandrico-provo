import React, { useState } from 'react';
import styled from 'styled-components';
import { WORK_EXPERIENCES } from '../../content/workExperiences';
import { IWorkExperience } from '../../types/WorkExperience';
import { MinimalBtn } from '../Buttons';
import { ExperienceDetails } from './ExperienceDetails';

const Container = styled.section`
    --ctn-gap: 40px;
    width: 100%;
    margin-bottom: var(--spacing-margin);

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: var(--ctn-gap);

    & > h2 {
        width: 100%;
        font-family: var(--font-header);
        font-size: var(--font-xl);
        color: var(--clr-text);
        padding: 0 var(--spacing-content-mobile);

        & > p {
            font-family: var(--font-display);
            font-size: var(--font-lg);

            & > span {
                color: var(--clr-main);
            }
        }

        @media (min-width: 575px) {
            padding: 0 var(--spacing-content);
        }
    }

    & > div {
        width: 100%;

        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        /* padding: 0 var(--spacing-content-mobile); */
        gap: var(--ctn-gap);

        & > ul {
            flex-grow: 1;
            padding: 0 var(--spacing-content-mobile);
            min-width: 350px;

            display: flex;
            flex-direction: column;
            gap: var(--ctn-gap);

            & > li {
                width: 100%;
                font-family: var(--font-display);
                font-size: var(--font-md);

                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            @media (min-width: 575px) {
                padding: 0;
            }
        }

        @media (min-width: 575px) {
            padding: 0 var(--spacing-content);
        }
    }
`;

export function WorkExperience() {
    const [experiences] = useState<IWorkExperience[]>(WORK_EXPERIENCES);
    const [experienceIndex, setExperienceIndex] = useState<number>(0);

    function switchExperience(newIndex: number) {
        if (!experiences[newIndex]) return;

        setExperienceIndex(newIndex);
    }

    return (
        <Container>
            <h2>
                Work
                <p>
                    Experience<span>.</span>
                </p>
            </h2>
            <div>
                <ul>
                    <li>
                        REDspace Inc.
                        <MinimalBtn
                            label="View Details"
                            clickHandler={() => switchExperience(0)}
                        />
                    </li>
                    <li>
                        Bursity Inc.
                        <MinimalBtn
                            label="View Details"
                            clickHandler={() => switchExperience(1)}
                        />
                    </li>
                </ul>
                <ExperienceDetails experience={experiences[experienceIndex]} />
            </div>
        </Container>
    );
}
