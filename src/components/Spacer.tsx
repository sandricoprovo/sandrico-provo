import React from 'react';
import styled from 'styled-components';

const SpacerStyled = styled.div<{ height: number }>`
    height: ${({ height }) => `${height}px`};
`;

interface SpaceProps {
    height: number;
}

export function Spacer({ height }: SpaceProps) {
    return <SpacerStyled height={height} />;
}
