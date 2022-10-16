import React from 'react';
import styled from 'styled-components';

const Tab = styled.li<{ isActive: boolean }>`
    flex-grow: 1;

    cursor: pointer;
    font-family: var(--font-header);
    padding: 24px;
    border-radius: 5px;
    font-size: var(--font-md);
    background-color: ${({ isActive }) =>
        !isActive ? 'var(--clr-eb-50)' : 'var(--clr-gbc-700)'};
    color: ${({ isActive }) =>
        !isActive ? 'var(--clr-text)' : 'var(--clr-white)'};
    transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
`;

interface WorkExperienceTabProps {
    jobTitle: string;
    isActiveTab: boolean;
    clickHandler: () => void;
}

export function WorkExperienceTab({
    clickHandler,
    jobTitle,
    isActiveTab,
}: WorkExperienceTabProps) {
    return (
        <Tab onClick={clickHandler} isActive={isActiveTab}>
            {jobTitle}
        </Tab>
    );
}
