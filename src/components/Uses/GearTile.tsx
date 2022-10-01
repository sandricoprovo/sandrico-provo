import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;

    & > h3 {
        margin-bottom: 24px;
        font-family: var(--font-display);
        font-size: var(--font-lg);
        color: var(--clr-text);
        letter-spacing: 1px;
    }

    & > ul > li {
        line-height: 180%;
        list-style: square;
        margin-left: 18px;
        padding-left: 8px;
        color: var(--clr-text);
    }
`;

interface GearTileProps {
    label: string;
    gear: string[];
}

export function GearTile({ gear, label }: GearTileProps) {
    return (
        <Container>
            <h3>{label}</h3>
            <ul>
                {gear.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </Container>
    );
}
