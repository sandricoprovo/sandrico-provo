import styled from 'styled-components';

import { slideUpFadeIn } from '../../styles/animations';

export const HeaderContainer = styled.header`
    padding: var(--space-base) var(--space-lg);
    display: flex;
    justify-content: space-between;
`;

export const LogoText = styled.p`
    cursor: pointer;
    background-color: transparent;
    font: var(--font-montserrat-10);
    color: var(--clr-text);
    position: relative;
    opacity: 0;
    animation: ${slideUpFadeIn} 700ms var(--fadeUp-bezier);
    animation-fill-mode: forwards;
    animation-delay: 50ms;
    transition: opacity 600ms var(--fadeUp-bezier);

    &:before {
        content: '';
        position: absolute;
        background-color: var(--clr-text);
        bottom: 8px;
        height: 10%;
        width: 100%;
        z-index: -10;
        transition: background-color 300ms var(--underline-bezier) 50ms,
            width 300ms var(--underline-bezier);
    }

    &:hover:before {
        width: 120%;
        background-color: var(--clr-pastelblue-60);
    }

    &:active::before {
        width: 136%;
        background-color: var(--clr-pastelblue-60);
    }
`;
