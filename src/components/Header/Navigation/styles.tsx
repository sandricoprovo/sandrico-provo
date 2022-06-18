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
    background-color: var(--clr-pastelblue-80);
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    overflow: hidden;

    & > li > a,
    & > div > p {
        color: var(--clr-white-60);
    }

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
    overflow: hidden;
`;

export const NavLink = styled(motion.a)<{ open: boolean }>`
    text-decoration: none;
    display: block;
    cursor: pointer;
    font-family: var(--font-primary);
    font-size: var(--font-400);
    color: var(--clr-text);

    &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0px;
        left: 0;
        z-index: -1;
        transform: translateY(4px);
        background-color: var(--clr-text);
        background-color: ${({ open }) =>
            open ? 'var(--clr-pastelblue-50)' : 'var(--clr-text)'};
        transition: transform 400ms var(--underline-bezier),
            width 400ms var(--underline-bezier);
    }

    &:hover::before {
        transform: translateY(0px);
    }
`;

export const MenuBtn = styled(motion.div)<{ open: boolean }>`
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
        transition: width 400ms var(--underline-bezier),
            background-color 400ms 200ms var(--underline-bezier);
    }

    & > span:nth-of-type(1),
    & > span:nth-of-type(2),
    & > span:nth-of-type(3) {
        background-color: var(--clr-text);
        background-color: ${({ open }) =>
            open ? 'var(--clr-white-60)' : 'var(--clr-text)'};
    }

    &:hover,
    &:focus {
        & > span:nth-of-type(2) {
            width: 48%;
        }

        & > span:nth-of-type(3) {
            width: 32%;
        }
    }

    &:active {
        & > span:nth-of-type(3) {
            width: 80%;
        }
    }
`;

export const MobileNavContent = styled.div`
    font-family: var(--font-primary);
    font-size: var(--font-400);
    line-height: 180%;
    font-weight: 600;
    width: 64%;
    margin-block-start: var(--space-xxl);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    gap: var(--space-xl);

    & > p {
        text-align: end;
    }
`;

export const ActiveNavLink = styled(motion.a)`
    position: relative;
    text-decoration: none;
    display: block;
    cursor: pointer;
    font-family: var(--font-primary);
    font-size: var(--font-400);
    padding-inline: var(--space-lg);

    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 8px;
        opacity: 1;
        z-index: -1;
        background-color: var(--clr-pastelblue-50);
        animation: activeLinkAnimate 700ms 550ms var(--fadeUp-bezier) forwards;
    }

    @keyframes activeLinkAnimate {
        0% {
            opacity: 1;
            height: 8px;
        }
        100% {
            opacity: 1;
            height: 100%;
        }
    }
`;
