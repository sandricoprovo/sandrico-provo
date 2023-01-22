import React from 'react';

import { Experience } from '../../types/experience';
import { ExternalLinkIcon } from '../shared/icons';
import { fadeUp, MOTION_DEFAULTS } from '../shared/motions';

import * as Styled from './RowStyles';

interface RowProps {
    experience: Experience;
    order: number;
}

export function Row({ experience, order }: RowProps) {
    const {
        id,
        companyName,
        jobTitle,
        location,
        timeline,
        companyLink,
        techUsed = [],
        achievements = [],
        wasCoOp = false,
    } = experience;

    return (
        <Styled.Container
            variants={fadeUp}
            transition={{
                delay: order / 100,
                duration: MOTION_DEFAULTS.DURATION,
                ease: MOTION_DEFAULTS.EASE,
            }}
            initial="initial"
            animate="animate"
        >
            <Styled.Info>
                <div>
                    <Styled.Header>{jobTitle}</Styled.Header>
                    {companyLink ? (
                        <Styled.TextLink
                            href={companyLink}
                            rel="noopenner noreferer"
                            target="_blank"
                        >
                            {companyName} <ExternalLinkIcon size={20} />
                        </Styled.TextLink>
                    ) : (
                        <Styled.Text>{companyName}</Styled.Text>
                    )}
                    {wasCoOp ? (
                        <Styled.Text>Cooperative Education</Styled.Text>
                    ) : null}
                    <Styled.Text>{timeline}</Styled.Text>
                    <Styled.Text>{location}</Styled.Text>
                </div>
                <Styled.StackContainer>
                    <Styled.Text>Technologies Used</Styled.Text>
                    <Styled.StackList>
                        {techUsed.length > 0 &&
                            techUsed.map((tech) => (
                                <Styled.StackItem key={`${id}_TU_${tech}`}>
                                    {tech}
                                </Styled.StackItem>
                            ))}
                    </Styled.StackList>
                </Styled.StackContainer>
            </Styled.Info>
            <Styled.Achievements>
                {achievements.length > 0 &&
                    achievements.map((achievement, index) => (
                        <Styled.AchievementItem key={`${id}_ACM_${index}`}>
                            {achievement}
                        </Styled.AchievementItem>
                    ))}
            </Styled.Achievements>
        </Styled.Container>
    );
}
