/* eslint-disable */
import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

const TabStyled = styled.button<{ isActive: boolean }>`
    font: var(--font-body);
    color: ${({ isActive }) =>
        isActive ? 'var(--clr-accent)' : 'var(--clr-text)'};
    border: none;
    padding: 16px 16px 16px 0;
    width: 100%;
    min-width: 150px;
    text-align: left;
    background-color: transparent;
    transition: color 0.2s var(--easing-hover);
    cursor: pointer;

    @media screen and (hover: hover) {
        &:hover, &:focus {
            color: ${({ isActive }) =>
        // This line below causes an eslint/prettier error due to wrapping
        isActive ? 'var(--clr-accent)' : 'var(--clr-text-header)'};
        }
    }
`;

interface TabProps {
    clickHandler: () => void;
    isActive: boolean;
    children: ReactNode | ReactNode[];
}

export function Tab({ clickHandler, children, isActive }: TabProps) {
    return (
        <TabStyled isActive={isActive} onClick={clickHandler}>
            {children}
        </TabStyled>
    );
}
