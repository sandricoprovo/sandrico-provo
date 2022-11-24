import React from 'react';
import styled from 'styled-components';

import { Children } from '../../types/children';

const RowDetailsStyled = styled.details`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: var(--xp-row-gap);

    & summary {
        font: var(--font-body);
        color: var(--clr-text-header);
        cursor: pointer;
        margin-block-end: 8px;

        @media screen and (hover: hover) {
            &:hover {
                color: var(--clr-accent);
            }
        }
    }

    & ul {
        display: flex;
        flex-direction: column;
        gap: 16px;

        & li {
            list-style: square;
            margin-inline-start: 18px;
        }
    }
`;

interface RowDetailsProps {
    children: Children;
}

export function RowDetails({ children }: RowDetailsProps) {
    return (
        <RowDetailsStyled>
            <summary>Details</summary>
            <ul>{children}</ul>
        </RowDetailsStyled>
    );
}
