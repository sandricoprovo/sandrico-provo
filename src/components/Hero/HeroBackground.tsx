import React from 'react';
import styled from 'styled-components';

const ColouredBackground = styled.div`
    width: 100%;
    margin: 0 var(--spacing-content);
    height: 4%;
    background-color: var(--clr-eb-600);
    background-color: var(--clr-main);
    z-index: 80;
`;

export function HeroBackground() {
    return <ColouredBackground />;
}
