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
    position: absolute;
    height: calc(100% - 80px);
    font-family: var(--font-secondary);
    font-size: var(--font-700);
    line-height: 160%;
    padding: 0 var(--space-lg) calc(var(--space-base) * 7) var(--space-lg);
    width: 100%;
    left: 0;
    bottom: 0;
    /* background-color: var(--clr-background); */
    background-color: var(--clr-white-75);
    z-index: -1;
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
