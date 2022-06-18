import styled from 'styled-components';
import { motion } from 'framer-motion';

export const NavBarContainer = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
`;

export const NavList = styled(motion.ul)`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: var(--space-xl);
    font-family: var(--font-secondary);
    font-size: var(--font-400);
    line-height: 160%;
`;

export const MobileNavList = styled(motion.div)`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    padding: 0 var(--space-lg);
    height: calc(100% - 80px); // Fallback
    height: -moz-available;
    height: -webkit-fill-available;
    height: fill-available;
    font-family: var(--font-secondary);
    font-size: var(--font-700);
    line-height: 160%;
    width: 100%;
    background-color: var(--clr-white-75);
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    gap: var(--space-xl);

    @media (max-width: 500px) {
        & > li > a {
            font-family: var(--font-secondary);
            font-size: var(--font-700);
        }
    }
`;

export const NavListItem = styled(motion.li)`
    list-style: none;
    position: relative;
`;

export const NavLink = styled.a`
    text-decoration: none;
    cursor: pointer;
    font-family: var(--font-primary);
    font-size: var(--font-400);
    color: var(--clr-text);

    &:before {
        content: '';
        position: absolute;
        background-color: var(--clr-text);
        top: 58px;
        height: 4px;
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

export const MenuBtn = styled(motion.div)`
    height: 32px;
    width: 56px;
    padding: 4px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    gap: 6px;
    z-index: 200;

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

export const MobileNavContent = styled.div`
    font-family: var(--font-primary);
    font-size: var(--font-400);
    line-height: 180%;
    color: var(--clr-text);
    font-weight: 600;
    width: 64%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    gap: var(--space-xl);

    & > p {
        text-align: end;
    }
`;

export const ActiveNavLink = styled.a`
    position: relative;
    text-decoration: none;
    cursor: pointer;
    font-family: var(--font-primary);
    font-size: var(--font-400);
    padding-inline: 1rem;
    color: var(--clr-text);
    animation: colorChangeAnimate 400ms 2s ease-in-out forwards;

    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 8px;
        opacity: 0;
        z-index: -1;
        background-color: black;
        animation: activeLinkAnimate 400ms 2s ease-in-out forwards;
    }

    @keyframes colorChangeAnimate {
        0% {
            color: var(--clr-text);
        }
        100% {
            color: var(--clr-white-60);
        }
    }

    @keyframes activeLinkAnimate {
        0% {
            opacity: 0;
            height: 8px;
        }
        100% {
            opacity: 1;
            height: 100%;
        }
    }
`;
