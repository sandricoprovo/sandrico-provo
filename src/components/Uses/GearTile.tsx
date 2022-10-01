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

export function GearTile() {
    return (
        <Container>
            <h3>Title</h3>
            <ul>
                <li>Gear one</li>
                <li>Gear two</li>
                <li>Gear three</li>
            </ul>
        </Container>
    );
}
