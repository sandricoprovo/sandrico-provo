import React, { ReactNode } from 'react';
import styled from 'styled-components';

const ToggleBtnStyled = styled.button`
    padding: 4px 16px;
    border: none;
    background-color: transparent;
    color: var(--clr-gs-300);
    font: var(--font-body);
    cursor: pointer;
    transition: color 0.2s var(--easing-hover);

    @media screen and (hover: hover) {
        &:hover {
            color: var(--clr-accent);
        }
    }
`;

interface ToggleBtnProps {
    children: ReactNode | ReactNode[];
    clickHandler: () => void;
}

export function ToggleBtn({ children, clickHandler }: ToggleBtnProps) {
    return (
        <ToggleBtnStyled type="button" onClick={clickHandler}>
            {children}
        </ToggleBtnStyled>
    );
}
