import React from 'react';
import styled from 'styled-components';

import { Children } from '../../types/children';

const IconsContainerStyled = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--spg-links);

    @media screen and (hover: hover) {
        & > a:hover > svg,
        & > a:focus > svg {
            fill: var(--clr-accent);
        }
    }
`;

interface IconsContainerProps {
    children: Children;
}

export function IconsContainer({ children }: IconsContainerProps) {
    return <IconsContainerStyled>{children}</IconsContainerStyled>;
}
