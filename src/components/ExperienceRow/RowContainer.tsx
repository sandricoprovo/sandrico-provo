import React from 'react';
import styled from 'styled-components';

import { Children } from '../../types/children';

const RowContainerStyled = styled.div`
    --xp-row-gap: 32px;
    width: 100%;
    padding-bottom: 24px;
    border-bottom: 1px solid var(--clr-text);

    display: flex;
    flex-direction: column;
    gap: var(--xp-row-gap);
`;

interface RowContainerProps {
    children: Children;
}

export function RowContainer({ children }: RowContainerProps) {
    return <RowContainerStyled>{children}</RowContainerStyled>;
}
