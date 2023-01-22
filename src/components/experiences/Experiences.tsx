import React from 'react';
import { motion } from 'framer-motion';

import { aboutMe } from '../../content/aboutMe';
import { educationList, experienceList } from '../../content/experience';
import { fadeUp, MOTION_DEFAULTS } from '../shared/motions';
import { FileIcon, LinkedInIcon } from '../shared/icons';
import { BodyText, Highlighted, SubHeader } from '../shared/typography';

import * as Styled from './ExperienceStyles';
import { Row } from './Row';

export function Experiences() {
    return (
        <Styled.Container>
            <div>
                <SubHeader>Professional Experience</SubHeader>
                <Styled.IconsContainer
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
                </Styled.IconsContainer>
            </div>
            <BodyText shouldMotion>
                Below you'll find a list of places I've worked professionally
                and some impactful achievements I made while there. You'll also
                see the technologies I used while features and solving technical
                problems. Further down you'll find a list of my post-secondary
                education.
            </BodyText>
            <Styled.ExperienceList>
                {experienceList.length > 0 &&
                    experienceList.map((experience, index) => (
                        <li key={experience.id}>
                            <Row order={index} experience={experience} />
                        </li>
                    ))}
            </Styled.ExperienceList>
            <Styled.EducationList
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
                                <Styled.EducationItem key={id}>
                                    <BodyText>{`${program} - ${school} // ${endDate}`}</BodyText>
                                </Styled.EducationItem>
                            );
                        })}
                </motion.ul>
            </Styled.EducationList>
        </Styled.Container>
    );
}
