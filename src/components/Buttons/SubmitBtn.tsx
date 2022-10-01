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
`;

interface SubmitBtnProps {
    label: string;
}
export function SubmitBtn({ label }: SubmitBtnProps) {
    return <SubmitBtnStyled type="submit">{label}</SubmitBtnStyled>;
}
