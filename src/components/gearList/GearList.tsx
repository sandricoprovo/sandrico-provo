import React from 'react';
import styled from 'styled-components';

import { GearList as IGearList } from '../../types/gear';

const GearTile = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    & > h3 {
        font-size: var(--font-200);
        font-family: var(--font-primary);
        font-weight: normal;
        line-height: 180%;
    }

    & > ul {
        display: flex;
        flex-direction: column;

        & > li {
            list-style: square;
            margin-inline-start: 18px;
            font: var(--font-body);
        }
    }
`;

interface GearListProps {
    gear: IGearList;
}

export function GearList({ gear }: GearListProps) {
    const { label, list } = gear;

    return (
        <GearTile>
            <h3>{label}</h3>
            <ul>
                {list.map((item, index) => (
                    <li key={`${item}_${index}`}>{item}</li>
                ))}
            </ul>
        </GearTile>
    );
}
