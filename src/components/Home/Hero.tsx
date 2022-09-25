import React from 'react';
import styled from 'styled-components';
import { useScrollPosition } from '../../hooks/useScrollPosition';

const HeroStyled = styled.section`
    padding: 164px 24% 164px 10%;
    position: relative;

    /* Content */
    & > div:nth-child(1) {
        position: relative;
        z-index: 10;
        width: 100%;
        opacity: 0;
        gap: 8px;

        animation-name: fadeTextIn;
        animation-duration: 0.9s;
        animation-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
        animation-fill-mode: forwards;
        animation-delay: 0.4s;

        & > p:nth-child(1) {
            font-family: var(--font-display);
            line-height: 100%;
            margin-left: 6px;
        }

        & > h1 {
            font-family: var(--font-header);
            line-height: 100%;
        }
    }

    /* Colored Background */
    & > div:nth-child(2) {
        position: absolute;
        padding-bottom: 2rem;
        top: 0;
        right: 0%;
        width: 0;
        background-color: var(--clr-hero-bkg);
        height: 100%;
        z-index: 1;
        overflow: hidden;
        transition: transform 0.1s ease-in-out;

        display: flex;
        justify-content: center;
        align-items: flex-end;

        animation-name: slideOver;
        animation-duration: 0.6s;
        animation-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96);
        animation-fill-mode: forwards;
        animation-delay: 0.5s;

        /* Intro Sentence */
        & > p {
            opacity: 0;
            transform: translateY(24px);
            font-family: var(--font-header);
            color: var(--clr-content-bkg);
            font-size: var(--font-300);
            max-width: 250px;

            animation-name: fadeTextIn;
            animation-duration: 0.9s;
            animation-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
            animation-fill-mode: forwards;
            animation-delay: 1.2s;

            & > span {
                font-family: var(--font-display);
                color: var(--clr-content-bkg);
                font-size: var(--font-300);
            }
        }
    }

    @keyframes slideOver {
        from {
            width: 0%;
        }
        to {
            width: 81%;
        }
    }

    @keyframes fadeTextIn {
        from {
            opacity: 0;
            display: none;
            transform: translateY(40px);
        }
        to {
            opacity: 1;
            display: inline;
            transform: translateY(0px);
        }
    }

    @media (min-width: 975px) {
        & > div:nth-child(2) {
            align-items: center;
        }
    }
`;

export function Hero() {
    const heroPosition = useScrollPosition(1.2);

    return (
        <HeroStyled>
            <div>
                <p>Hey, I'm</p>
                <h1 className="header-2">
                    <span>San</span> <br />
                    <span>dri</span> <br />
                    <span>co</span> <br />
                </h1>
            </div>
            <div style={{ transform: `translateX(${heroPosition}px)` }}>
                <p>
                    I write <span>front-end</span> and <span>back-end</span>{' '}
                    code.
                </p>
            </div>
        </HeroStyled>
    );
}
