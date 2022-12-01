import React from 'react';
import styled from 'styled-components';

import { Children } from '../../../types/children';
import { TrashIcon } from '../icons';

const ClearBtnStyled = styled.button`
    padding: 4px 16px;
    font: var(--font-body);
    color: var(--clr-text-disabled);
    cursor: pointer;
    border: none;
    background-color: var(--clr-btn-disabled);
    border-radius: 5px;
    transition: color var(--hover-duration) var(--easing-hover),
        background-color var(--hover-duration) var(--easing-hover);

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    & > span {
        padding-inline: 0;
    }

    &:active,
    &:focus {
        background-color: var(--clr-danger);
        color: var(--clr-text-header);

        & > span > svg {
            fill: var(--clr-text-header);
        }
    }

    @media screen and (hover: hover) {
        &:hover {
            background-color: var(--clr-danger);
            color: var(--clr-text-header);

            & > span > svg {
                fill: var(--clr-text-header);
            }
        }
    }
`;

interface ClearBtnProps {
    children: Children;
    clickHandler: () => void;
}

export function ClearBtn({ children, clickHandler }: ClearBtnProps) {
    return (
        <ClearBtnStyled type="button" onClick={clickHandler}>
            {children} <TrashIcon size={18} />
        </ClearBtnStyled>
    );
}
