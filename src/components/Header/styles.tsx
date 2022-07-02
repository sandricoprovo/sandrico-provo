import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeaderContainer = styled.header`
    background-color: var(--clr-background);
    padding: var(--space-base) var(--space-lg);
    grid-row: 1 / 1;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LogoText = styled(motion.a)<{ open: boolean }>`
    cursor: pointer;
    background-color: transparent;
    text-decoration: none;
    font-family: var(--font-secondary);
    font-size: var(--font-600);
    color: var(--clr-text);
    color: ${({ open }) => (open ? 'var(--clr-white-60)' : 'var(--clr-text)')};
    position: relative;
    z-index: 110;
    transition: color 400ms 50ms var(--underline-bezier);

    &:before {
        content: '';
        position: absolute;
        background-color: var(--clr-text);
        background-color: ${({ open }) =>
            open ? 'var(--clr-pastelblue-50)' : 'var(--clr-text)'};
        top: 32px;
        height: 4px;
        width: 100%;
        z-index: -10;
        transition: background-color 300ms var(--underline-bezier) 50ms,
            width 300ms var(--underline-bezier);
    }

    &:hover:before {
        width: 120%;
        background-color: var(--clr-pastelblue-60);
        background-color: ${({ open }) =>
            open ? 'var(--clr-pastelblue-50)' : 'var(--clr-text)'};
    }

    &:active::before {
        width: 136%;
        background-color: var(--clr-pastelblue-60);
        background-color: ${({ open }) =>
            open ? 'var(--clr-pastelblue-50)' : 'var(--clr-text)'};
    }
`;
