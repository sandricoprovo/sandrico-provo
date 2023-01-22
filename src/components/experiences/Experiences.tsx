import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { aboutMe } from '../../content/aboutMe';
import { educationList, experienceList } from '../../content/experience';
import { fadeUp, MOTION_DEFAULTS } from '../shared/motions';
import { FileIcon, LinkedInIcon } from '../shared/icons';
import { BodyText, Highlighted, SubHeader } from '../shared/typography';

import { ExperienceRow } from './ExperienceRow';

const ExperiencesListContainer = styled(motion.section)`
    margin-block-end: var(--spg-section);
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 40px;
`;

const IconsContainer = styled(motion.div)`
    display: flex;
    align-items: center;
    gap: 4px;

    @media screen and (hover: hover) {
        & > a:hover > svg {
            fill: var(--clr-accent);
        }
    }
`;

const ExperienceList = styled(motion.ul)`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 40px;
`;

const EducationList = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const EducationItem = styled.li`
    list-style: square;
    margin-inline-start: 15px;
`;

export function Experiences() {
    return (
        <ExperiencesListContainer>
            <div>
                <SubHeader>Professional Experience</SubHeader>
                <IconsContainer
                    variants={fadeUp}
                    transition={{
                        delay: MOTION_DEFAULTS.DELAY,
                        duration: MOTION_DEFAULTS.DURATION,
                        ease: MOTION_DEFAULTS.EASE,
                    }}
                    initial="initial"
                    animate="animate"
                >
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
                </IconsContainer>
            </div>
            <BodyText shouldMotion>
                Below you'll find a list of places I've worked professionally
                and some notable achievements I made while there. You'll also
                see the technologies I used build out features and solve
                problems. Further down you'll also find a list of my
                post-secondary education.
            </BodyText>
            <ExperienceList>
                {experienceList.length > 0 &&
                    experienceList.map((experience, index) => (
                        <li key={experience.id}>
                            <ExperienceRow
                                order={index}
                                experience={experience}
                            />
                        </li>
                    ))}
            </ExperienceList>
            <EducationList
                variants={fadeUp}
                transition={{
                    delay: MOTION_DEFAULTS.DELAY,
                    duration: MOTION_DEFAULTS.DURATION,
                    ease: MOTION_DEFAULTS.EASE,
                }}
                initial="initial"
                animate="animate"
            >
                <SubHeader>
                    <Highlighted>Education</Highlighted>
                </SubHeader>
                <motion.ul>
                    {educationList.length > 0 &&
                        educationList.map((education) => {
                            const { endDate, program, school, id } = education;
                            return (
                                <EducationItem key={id}>
                                    <BodyText>{`${school} // ${program} // ${endDate}`}</BodyText>
                                </EducationItem>
                            );
                        })}
                </motion.ul>
            </EducationList>
        </ExperiencesListContainer>
    );
}
