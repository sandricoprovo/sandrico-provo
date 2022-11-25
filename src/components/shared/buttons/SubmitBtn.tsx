import React from 'react';
import styled from 'styled-components';

import { Children } from '../../../types/children';
import { SendIcon } from '../icons';

const SubmitBtnStyled = styled.button`
    padding: 4px 16px;
    font: var(--font-body);
    color: var(--clr-background);
    cursor: pointer;
    border: none;
    background-color: var(--clr-accent);
    border-radius: 5px;
    transition: color var(--hover-duration) var(--easing-hover),
        background-color var(--hover-duration) var(--easing-hover);

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    & > span {
        padding-block-end: 4px;
        padding-inline: 0px;
    }

    &:disabled {
        cursor: auto;
        background-color: var(--clr-gs-500);
        color: var(--clr-text);

        & > span > svg {
            fill: var(--clr-text);
        }
    }

    @media screen and (hover: hover) {
        &:hover:not(:disabled) {
            background-color: var(--clr-accent-focus);
        }
        &:active:not(:disabled) {
            background-color: var(--clr-accent-active);
        }
    }
`;

interface SubmitBtnProps {
    children: Children;
    isDisabled: boolean;
    type: 'submit' | 'button';
    clickHandler?: () => void;
}

export function SubmitBtn({
    children,
    clickHandler,
    type,
    isDisabled,
}: SubmitBtnProps) {
    return (
        <SubmitBtnStyled
            type={type}
            onClick={clickHandler ?? undefined}
            disabled={isDisabled}
        >
            {children} <SendIcon size={22} color="var(--clr-background)" />
        </SubmitBtnStyled>
    );
}
