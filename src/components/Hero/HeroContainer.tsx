import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.section`
    position: relative;
    width: 100%;
    min-height: 500px;
    height: calc(100vh - 67px - 112px);
    margin-bottom: var(--spacing-margin);
    padding: 20vh var(--spacing-content-mobile);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;

    --fade-bezier: cubic-bezier(0.65, 0.05, 0.36, 1);

    & > :nth-child(1) {
        opacity: 0;
        animation: fadeTextIn 0.4s 0.2s var(--fade-bezier) forwards;
    }

    & > :nth-child(2) {
        opacity: 0;
        animation: fadeTextIn 0.4s 0.6s var(--fade-bezier) forwards;
    }

    & > :nth-child(3) {
        opacity: 0;
        animation: fadeTextIn 0.4s 1s var(--fade-bezier) forwards;
    }

    @media (min-width: 575px) {
        height: calc(100vh - 67px - 30px);
        padding: 20vh var(--spacing-content);
    }

    @keyframes fadeTextIn {
        from {
            opacity: 0;
            transform: translateY(40px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

export function HeroContainer({
    children,
}: {
    children: ReactNode | ReactNode[];
}) {
    return <Container>{children}</Container>;
}
