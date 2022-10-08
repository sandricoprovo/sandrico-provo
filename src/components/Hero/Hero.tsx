import React from 'react';
import styled from 'styled-components';
import { HeroContainer } from './HeroContainer';
import { HeroHeader } from './HeroHeader';

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`;

const SubText = styled.span`
    width: 40%;
    min-width: 300px;
    line-height: 180%;
    text-align: center;
    font-family: var(--font-body);
    font-size: var(--font-base);
    margin-bottom: -20px;

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
                <span>Hey, I'm Sandrico. I'm a</span>
            </SubText>
            <HeroHeader />
            <TextContainer>
                <SubText>
                    I write organized and type safe code using technologies like
                    React, TypeScript and GraphQL to create{' '}
                    <span>data-driven</span> and <span>appealing</span> user
                    experiences for the web.
                </SubText>
            </TextContainer>
        </HeroContainer>
    );
}
