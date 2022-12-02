import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Tab as ITab } from '../../types/tabs';
import { Projects } from '../projects/Projects';
import { Tab } from '../shared/buttons';
import { fadeUp, MOTION_DEFAULTS } from '../shared/motions';
import { TabButtons } from '../containers/TabButtons';
import { TabHeader } from '../containers/TabHeader';

import { Experiences } from './Experiences';

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
                        <motion.li
                            key={tab.header.toLowerCase()}
                            variants={fadeUp}
                            transition={{
                                delay: (index + 2.5) * MOTION_DEFAULTS.DELAY,
                                duration: MOTION_DEFAULTS.DURATION,
                                ease: MOTION_DEFAULTS.EASE,
                            }}
                            initial="initial"
                            animate="animate"
                        >
                            <Tab
                                clickHandler={() => handleTabSwitch(index)}
                                isActive={activeTab === index}
                                testId={`EXPTAB-${index + 1}`}
                            >
                                {tab.header}
                            </Tab>
                        </motion.li>
                    ))}
                </TabButtons>
                <TabUnderline activeTab={activeTab} />
            </TabHeader>
            {tabs[activeTab].content}
        </ExperienceSectionContainer>
    );
}
