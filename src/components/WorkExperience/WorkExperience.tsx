import React, { useState } from 'react';
import styled from 'styled-components';
import { WORK_EXPERIENCES } from '../../content/workExperiences';
import { IWorkExperience } from '../../types/WorkExperience';
import { ContentContainer } from './ContentContainer';
import { ExperienceDetails } from './ExperienceDetails';
import { Header } from './Header';
import { TabHeader } from './TabHeader';
import { WorkExperienceTab } from './WorkExperienceTab';

const Container = styled.section`
    --ctn-gap: 64px;
    width: 100%;
    margin-bottom: var(--spacing-margin);

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: var(--ctn-gap);
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
            <Header />
            <ContentContainer>
                <TabHeader>
                    {experiences.map((experience, index) => (
                        <WorkExperienceTab
                            key={experience.companyName}
                            jobTitle={experience.jobTitle}
                            isActiveTab={index === experienceIndex}
                            clickHandler={() => switchExperience(index)}
                        />
                    ))}
                </TabHeader>
                <ExperienceDetails experience={experiences[experienceIndex]} />
            </ContentContainer>
        </Container>
    );
}
