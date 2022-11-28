import React from 'react';
import styled from 'styled-components';

import { Children } from '../../types/children';

const RowInfoStyled = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--xp-row-gap);
`;

interface RowInfoProps {
    children: Children;
}

export function RowInfo({ children }: RowInfoProps) {
    return <RowInfoStyled>{children}</RowInfoStyled>;
}
