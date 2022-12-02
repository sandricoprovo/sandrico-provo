import React, { useRef } from 'react';
import styled from 'styled-components';

import { Children } from '../../../types/children';
import { SubmitStatusesAvailable, SUBMIT_STATUSES } from '../../../types/form';
import { SendIcon, SpinnerIcon } from '../icons';

const SubmitBtnStyled = styled.button<{ statusClr: string }>`
    padding: 4px 16px;
    font: var(--font-body);
    color: var(--clr-background);
    cursor: pointer;
    border: none;
    background-color: var(--clr-accent); // fallback
    background-color: ${({ statusClr }) => statusClr};
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
        background-color: var(--clr-btn-disabled);
        color: var(--clr-text-disabled);

        & > span > svg {
            fill: var(--clr-text-disabled);
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
    status: SubmitStatusesAvailable;
    submitInProgress: boolean;
    clickHandler?: () => void;
    testId?: string;
}

export function SubmitBtn({
    children,
    clickHandler,
    type,
    isDisabled,
    submitInProgress,
    status = SUBMIT_STATUSES.NONE,
    testId,
}: SubmitBtnProps) {
    const statusClr = useRef('var(--clr-accent)');

    if (status === SUBMIT_STATUSES.SUCCEEDED) {
        statusClr.current = 'var(--clr-success)';
    } else if (status === SUBMIT_STATUSES.FAILED) {
        statusClr.current = 'var(--clr-danger)';
    } else {
        statusClr.current = 'var(--clr-accent)';
    }

    return (
        <SubmitBtnStyled
            type={type}
            onClick={clickHandler ?? undefined}
            disabled={isDisabled}
            statusClr={statusClr.current}
            data-test-id={testId}
        >
            {children}{' '}
            {submitInProgress ? (
                <SpinnerIcon
                    size={22}
                    color="var(--clr-background)"
                    animation="infiniteSpin"
                />
            ) : (
                <SendIcon size={22} color="var(--clr-background)" />
            )}
        </SubmitBtnStyled>
    );
}
