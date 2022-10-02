import React from 'react';
import styled from 'styled-components';
import { ArrowRightIcon } from '../Shared/Icons';

const MinimalBtnStyled = styled.button`
    border: transparent;
    background-color: transparent;
    padding: 12px 16px;
    font-family: var(--font-display);
    color: var(--clr-text);
    letter-spacing: 1px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;

    @media (hover: hover) {
        &:hover {
            cursor: pointer;
        }

        &:hover > svg {
            animation-name: rightArrowPoint;
            animation-duration: 0.6s;
            animation-timing-function: cubic-bezier(0.79, 0.14, 0.15, 0.86);
            animation-direction: alternate;
            animation-iteration-count: infinite;
        }
    }
`;

interface MinimalBtnProps {
    label: string;
    clickHandler: () => void;
}

export function MinimalBtn({ clickHandler, label }: MinimalBtnProps) {
    return (
        <MinimalBtnStyled type="button" onClick={clickHandler}>
            {label} <ArrowRightIcon title={label} size={16} />
        </MinimalBtnStyled>
    );
}
