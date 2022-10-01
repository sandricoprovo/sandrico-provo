import React from 'react';
import styled from 'styled-components';
import { Trash2Icon } from '../Shared/Icons';

const DangerBtnStyled = styled.button`
    padding: 14px 16px;
    border: none;
    border-radius: var(--border-radius);
    background-color: transparent;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    color: var(--clr-text);

    display: flex;
    align-items: center;
    gap: 8px;

    & > svg {
        transition: stroke 0.2s ease-in-out;
    }

    &:hover,
    &:focus {
        background-color: var(--clr-eb-75);

        & > svg {
            stroke: var(--clr-rs-500);
        }
    }

    &:active {
        background-color: var(--clr-rs-500);

        & > svg {
            stroke: var(--clr-icon);
        }
    }
`;

interface DangerBtnProps {
    label?: string;
    clickHandler: () => void;
}

export function DangerBtn({ clickHandler, label }: DangerBtnProps) {
    return (
        <DangerBtnStyled onClick={clickHandler}>
            {label ?? null} <Trash2Icon title={label ?? 'Delete'} size={16} />
        </DangerBtnStyled>
    );
}
