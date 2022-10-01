import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.section`
    padding: 0 var(--spacing-content-mobile);
    margin-bottom: calc(var(--spacing-margin) / 2);

    display: flex;
    flex-direction: column;
    gap: 64px;

    & > h2 {
        margin-bottom: 64px;
        font-family: var(--font-header);
        font-size: var(--font-xxl);
        color: var(--clr-text);
    }

    @media (min-width: 575px) {
        padding: 0 var(--spacing-content);
    }
`;

interface GearTilesContainerProps {
    children: ReactNode | ReactNode[];
}

export function GearTilesContainer({ children }: GearTilesContainerProps) {
    return (
        <Container>
            <h2>My Gear</h2>
            {children}
        </Container>
    );
}
