import React from 'react';
import styled from 'styled-components';

const SubmitBtnStyled = styled.button`
    padding: 12px 16px;
    width: 100%;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-family: var(--font-base);
    color: var(--clr-text);
    background-color: var(--clr-main);

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
