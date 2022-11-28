import React from 'react';

import { Experience } from '../../types/experience';
import { ExternalLinkIcon } from '../shared/icons';
import { BodyText, Highlighted, SmallBodyText } from '../shared/typography';

import { InfoTile } from './InfoTile';
import { RowContainer } from './RowContainer';
import { RowDetails } from './RowDetails';
import { RowInfo } from './RowInfo';
import { RowTechStack } from './RowTechStack';

interface ExperienceRowProps {
    experience: Experience;
    order: number;
}

export function ExperienceRow({ experience, order }: ExperienceRowProps) {
    const {
        companyName,
        jobTitle,
        location,
        techUsed = [],
        timeline,
        companyLink,
        details = [],
    } = experience;

    return (
        <RowContainer order={order}>
            <RowInfo>
                <InfoTile>
                    <BodyText>Role:</BodyText>
                    <BodyText>
                        <Highlighted>{jobTitle}</Highlighted>
                    </BodyText>
                </InfoTile>
                <InfoTile>
                    <BodyText>Company:</BodyText>
                    {companyLink ? (
                        <a
                            href={companyLink}
                            title={companyName}
                            rel="noreferrer noopener"
                            target="_blank"
                        >
                            {companyName}
                            <ExternalLinkIcon size={16} />
                        </a>
                    ) : (
                        <BodyText>
                            <Highlighted>{companyName}</Highlighted>
                        </BodyText>
                    )}
                </InfoTile>
                <InfoTile>
                    <BodyText>Location:</BodyText>
                    <BodyText>
                        <Highlighted>{location}</Highlighted>
                    </BodyText>
                </InfoTile>
                <InfoTile>
                    <BodyText>Duration:</BodyText>
                    <BodyText>
                        <Highlighted>{timeline}</Highlighted>
                    </BodyText>
                </InfoTile>
            </RowInfo>
            <RowTechStack>
                {techUsed.map((tech, index) => (
                    <li key={`${jobTitle}_tech_${index}`}>
                        <SmallBodyText>{tech}</SmallBodyText>
                    </li>
                ))}
            </RowTechStack>
            {details && (
                <RowDetails>
                    {details.map((detail, index) => (
                        <li key={`${jobTitle}_detail_${index}`}>
                            <BodyText>{detail}</BodyText>
                        </li>
                    ))}
                </RowDetails>
            )}
        </RowContainer>
    );
}
