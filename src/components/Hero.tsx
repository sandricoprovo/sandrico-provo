import React from 'react';
import styled from 'styled-components';
import { useScrollPosition } from '../hooks/useScrollPosition';

const HeroStyled = styled.section`
    padding: 164px 24% 164px 10%;
    position: relative;
    margin-bottom: var(--spacing-margin);
    height: 88vh;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    /* Content */
    & > div:nth-child(1) {
        position: relative;
        z-index: 10;
        width: 100%;
        gap: 8px;

        & > p:nth-child(1) {
            font-family: var(--font-display);
            line-height: 100%;
            margin-left: 6px;
        }

        & > h1 {
            font-size: var(--font-xxl);
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
        width: 80%;
        background-color: var(--clr-main);
        height: 100%;
        z-index: 1;
        overflow: hidden;
        transform: translateX(-100vw);

        display: flex;
        justify-content: center;
        align-items: flex-end;

        /* Intro Sentence */
        & > p {
            opacity: 0;
            transform: translateY(24px);
            font-family: var(--font-body);
            color: var(--clr-content-bkg);
            font-size: var(--font-base);
            max-width: 250px;
            line-height: 180%;

            animation-name: fadeTextIn;
            animation-duration: 0.9s;
            animation-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
            animation-fill-mode: forwards;
            animation-delay: 1.2s;

            & > span {
                font-family: var(--font-display);
                color: var(--clr-content-bkg);
                font-size: var(--font-md);
            }
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
        height: 100vh;

        & > div:nth-child(1) > h1 {
            font-size: var(--font-xxxl);
        }

        & > div:nth-child(2) {
            align-items: center;
        }
    }
`;

interface HeroProps {
    header: {
        overline?: string;
        lineOne?: string;
        lineTwo?: string;
        lineThree?: string;
    };
    showContent?: boolean;
}

export function Hero({ header, showContent = false }: HeroProps) {
    const headerText = useScrollPosition(0.5);
    const coloredBackground = useScrollPosition(0.5);

    const { lineOne, lineThree, lineTwo, overline } = header;

    return (
        <HeroStyled>
            <div
                style={{
                    transform: `translateY(${-headerText}px)`,
                }}
            >
                {overline ? <p>{overline}</p> : null}
                <h1>
                    {lineOne ? (
                        <>
                            <span>{lineOne}</span> <br />
                        </>
                    ) : null}
                    {lineTwo ? (
                        <>
                            <span>{lineTwo}</span> <br />
                        </>
                    ) : null}
                    {lineThree ? (
                        <>
                            <span>{lineThree}</span> <br />
                        </>
                    ) : null}
                </h1>
            </div>
            <div style={{ transform: `translateX(${coloredBackground}px)` }}>
                {showContent && (
                    <p>
                        I'm a <span>front-end</span> focused full stack Software
                        Engineer. I use JavaScript, React, and TypeScript to
                        build appealing web experiences.
                    </p>
                )}
            </div>
        </HeroStyled>
    );
}
