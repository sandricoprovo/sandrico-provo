import styled from 'styled-components';
import { motion } from 'framer-motion';

import { slideUpFadeIn } from '../../../styles/animations';

export const NavBarContainer = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const NavList = styled(motion.ul)`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: var(--space-xl);
    font: var(--font-poppins-40);

    @media (max-width: 500px) {
        background-color: var(--clr-background);
        padding-top: var(--space-xxl);
        padding-bottom: calc(var(--space-base) * 7);
        position: absolute;
        bottom: 0px;
        z-index: 100;
        width: 100%;
        height: calc(100vh - 71px);
        bottom: 0;
        flex-direction: column;
        align-items: flex-end;
    }
`;

export const NavListItem = styled(motion.li)`
    list-style: none;
    position: relative;
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

    @media (max-width: 500px) {
        font: var(--font-montserrat-30);
    }
`;

export const MenuBtn = styled.div`
    height: 32px;
    width: 56px;
    padding: 4px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    gap: 6px;
    opacity: 0;
    animation: ${slideUpFadeIn} 700ms var(--fadeUp-bezier);
    animation-fill-mode: forwards;
    animation-delay: 300ms;
    transition: opacity 600ms var(--fadeUp-bezier);

    & > span {
        display: block;
        width: 80%;
        height: 4px;
        transition: width 400ms var(--underline-bezier);
    }

    & > span:nth-of-type(1),
    & > span:nth-of-type(2),
    & > span:nth-of-type(3) {
        background-color: var(--clr-text);
    }

    &:hover,
    &:focus {
        & > span:nth-of-type(2) {
            background-color: var(--clr-text);
            width: 48%;
        }

        & > span:nth-of-type(3) {
            background-color: var(--clr-text);
            width: 32%;
        }
    }

    &:active {
        & > span:nth-of-type(3) {
            background-color: var(--clr-text);
            width: 80%;
        }
    }
`;
