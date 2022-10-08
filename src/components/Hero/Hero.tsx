import React from 'react';
import styled from 'styled-components';
import { HeroContainer } from './HeroContainer';
import { HeroHeader } from './HeroHeader';

const SubText = styled.p`
    width: 40%;
    min-width: 300px;
    line-height: 180%;
    text-align: center;
    font-family: var(--font-body);
    font-size: var(--font-base);
    margin-bottom: -20px;

    animation: fadeTextIn 0.4s cubic-bezier(0.65, 0.05, 0.36, 1) forwards;

    & > span {
        font-family: var(--font-display);
    }
`;

interface HeroProps {
    overline?: string;
    header: string;
}

export function Hero({ header, overline }: HeroProps) {
    return (
        <HeroContainer>
            <SubText>
                <span>{overline}</span>
            </SubText>
            <HeroHeader content={header} />
            <SubText>
                I write organized and type safe code using technologies like
                React, TypeScript and GraphQL to create <span>data-driven</span>{' '}
                and <span>appealing</span> user experiences for the web.
            </SubText>
        </HeroContainer>
    );
}
