import React, { useState } from 'react';
import styled from 'styled-components';

import { Tab as ITab } from '../../types/tabs';
import { Experiences } from '../Experiences';
import { Projects } from '../Projects';
import { Tab } from '../shared/buttons';

import { TabButtons } from './TabButtons';
import { TabHeader } from './TabHeader';

const ExperienceSectionContainer = styled.section`
    width: 100%;
    margin-block-end: var(--spg-section);

    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const TabUnderline = styled.hr<{ activeTab: number }>`
    --position: ${({ activeTab }) => `calc(${activeTab * 150}px)`};
    transform: translateX(var(--position));
    width: 150px;
    border: none;
    height: 1px;
    transition: transform 0.2s cubic-bezier(1, 0, 0, 1);
    background-color: var(--clr-accent);
`;

export function ExperienceSection() {
    const [activeTab, setActiveTab] = useState(0);

    const tabs: ITab[] = [
        {
            header: 'Experience',
            content: <Experiences />,
        },
        {
            header: 'Projects',
            content: <Projects />,
        },
    ];

    const handleTabSwitch = (tabIndex: number) => {
        setActiveTab(tabIndex);
    };

    return (
        <ExperienceSectionContainer>
            <TabHeader>
                <TabButtons>
                    {tabs.map((tab, index) => (
                        <li key={tab.header.toLowerCase()}>
                            <Tab
                                clickHandler={() => handleTabSwitch(index)}
                                isActive={activeTab === index}
                            >
                                {tab.header}
                            </Tab>
                        </li>
                    ))}
                </TabButtons>
                <TabUnderline activeTab={activeTab} />
            </TabHeader>
            {tabs[activeTab].content}
        </ExperienceSectionContainer>
    );
}