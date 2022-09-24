import React from 'react';
import styled from 'styled-components';

const MenuBtnSVG = styled.svg<{ open: boolean }>`
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: transform 0.35s;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    z-index: 100;
    background-color: var(--clr-background);
    transform: ${({ open }) => (open ? 'rotate(45deg)' : '')};

    & > path {
        fill: none;
        transition: stroke-dasharray 0.35s, stroke-dashoffset 0.35s;
        stroke: var(--clr-text);
        stroke-width: 3;
        stroke-linecap: round;
    }

    & > path:nth-child(1) {
        stroke-dasharray: 40 160;
        stroke-dashoffset: ${({ open }) => (open ? '-64px' : '')};
    }

    & > path:nth-child(2) {
        stroke-dasharray: 40 142;
        transform-origin: 50%;
        transition: transform 0.35s;
        transform: ${({ open }) => (open ? 'rotate(90deg)' : '')};
    }

    & > path:nth-child(3) {
        stroke-dasharray: 40 85;
        transform-origin: 50%;
        transition: transform 0.35s, stroke-dashoffset 0.35s;
        stroke-dashoffset: ${({ open }) => (open ? '-64px' : '')};
    }

    @media (hover: hover) {
        &:hover > path:nth-child(1) {
            stroke-dasharray: 56 160;
        }
    }
`;

interface MenuBtnProps {
    isDrawerOpen: boolean;
    toggleDrawerHandler: () => void;
}

export function MenuBtn({ isDrawerOpen, toggleDrawerHandler }: MenuBtnProps) {
    return (
        <MenuBtnSVG
            open={isDrawerOpen}
            viewBox="0 0 100 100"
            width="64"
            onClick={toggleDrawerHandler}
        >
            <path d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" />
            <path d="m 30,50 h 40" />
            <path d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" />
        </MenuBtnSVG>
    );
}
