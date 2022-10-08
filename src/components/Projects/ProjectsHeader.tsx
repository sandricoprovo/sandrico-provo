import React from 'react';
import styled from 'styled-components';

const Header = styled.h3`
    font-family: var(--font-header);
    font-size: var(--font-xl);

    & > span {
        display: block;
        font-family: var(--font-display);
        font-size: var(--font-md);
        line-height: 120%;
    }
`;

interface ProjectsHeaderProps {
    overline: string;
    header: string;
}

export function ProjectsHeader({ header, overline }: ProjectsHeaderProps) {
    return (
        <Header>
            <span>{overline}</span>
            {header}
        </Header>
    );
}
