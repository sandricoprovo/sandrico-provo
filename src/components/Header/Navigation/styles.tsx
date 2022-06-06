import styled from 'styled-components';

import { slideUpFadeIn } from '../../../styles/animations';

export const NavBarContainer = styled.nav`
    min-width: 370px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const NavList = styled.ul`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: var(--space-xl);
`;

export const NavListItem = styled.li<{ animationDelay: number }>`
    list-style: none;
    position: relative;
    opacity: 0;
    animation: ${slideUpFadeIn} 700ms var(--fadeUp-bezier);
    animation-fill-mode: forwards;
    animation-delay: ${({ animationDelay }) =>
        animationDelay ? `${animationDelay}ms` : 300};
    transition: opacity 600ms var(--fadeUp-bezier);
`;

export const NavLink = styled.a`
    text-decoration: none;
    padding: var(--space-xs) var(--space-sm);
    cursor: pointer;
    font: var(--font-poppins-30);
    color: var(--clr-text);

    &:before {
        content: '';
        position: absolute;
        background-color: var(--clr-text);
        bottom: 2px;
        height: 10%;
        width: 0px;
        z-index: -10;
        transition: width 400ms var(--underline-bezier);
    }

    &:hover::before {
        content: '';
        position: absolute;
        background-color: var(--clr-text);
        width: 100%;
        transition: width 400ms var(--underline-bezier);
    }

    &:active::before,
    &:focus::before {
        width: 120%;
        transition: width 400ms var(--underline-bezier);
    }
`;
