import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
    z-index: 100;
    position: relative;
    font-family: var(--font-display);
    font-size: var(--font-xxxl);
    color: var(--clr-text-accent);
    line-height: 100%;
    letter-spacing: 2px;
    text-align: center;
    opacity: 0;
    transform: translateY(40px);

    animation: fadeTextIn 0.4s 0.4s cubic-bezier(0.65, 0.05, 0.36, 1) forwards;

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

interface HeroHeaderProps {
    content: string;
}

export function HeroHeader({ content }: HeroHeaderProps) {
    return <Header>{content}</Header>;
}
