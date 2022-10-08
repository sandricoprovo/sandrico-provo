import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.section`
    position: relative;
    width: 100%;
    height: calc(100vh - 67px - 112px);
    margin-bottom: var(--spacing-margin);
    padding: 20vh var(--spacing-content);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;

    @media (min-width: 575px) {
        height: calc(100vh - 67px - 30px);
    }
`;

export function HeroContainer({
    children,
}: {
    children: ReactNode | ReactNode[];
}) {
    return <Container>{children}</Container>;
}
