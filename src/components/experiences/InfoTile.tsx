import React from 'react';
import styled from 'styled-components';

import { Children } from '../../types/children';

const InfoTileStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    & a {
        transition: color var(--hover-duration) var(--easing-hover);
        font: var(--font-body);
        color: var(--clr-text-header);
        text-decoration: none;

        display: flex;
        align-items: center;
        gap: 8px;
    }

    @media screen and (hover: hover) {
        &:hover a,
        &:focus a {
            color: var(--clr-accent);

            & span > svg {
                fill: var(--clr-accent);
            }
        }
    }
`;

interface RowContainerProps {
    children: Children;
}

export function InfoTile({ children }: RowContainerProps) {
    return <InfoTileStyled>{children}</InfoTileStyled>;
}
