import React from 'react';
import styled from 'styled-components';

const SubmitBtnStyled = styled.button`
    padding: 16px;
    width: 100%;
    border: none;
    border-radius: var(--border-radius);
    cursor: pointer;
    font-family: var(--font-header);
    color: var(--clr-text);
    background-color: var(--clr-main);
    transition: background-color 0.2s ease-in-out;

    &:hover,
    &:focus {
        background-color: var(--clr-main-hover);
    }

    &:active {
        background-color: var(--clr-main-active);
    }

    &:disabled {
        background-color: var(--clr-eb-100);
        color: var(--clr-eb-300);
    }
`;

interface SubmitBtnProps {
    label: string;
    isDisabled?: boolean;
}
export function SubmitBtn({ label, isDisabled = false }: SubmitBtnProps) {
    return (
        <SubmitBtnStyled type="submit" disabled={isDisabled}>
            {label}
        </SubmitBtnStyled>
    );
}
