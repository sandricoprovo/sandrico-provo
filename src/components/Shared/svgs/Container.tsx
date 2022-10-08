import React, { ReactNode } from 'react';
import styled from 'styled-components';

const TechLogoContainerStyled = styled.div<{ size: number }>`
    height: ${({ size }) => `${size}px` || '20px'};
    width: ${({ size }) => `${size}px` || '20px'};
`;

interface TechLogoContainerProps {
    children: ReactNode | ReactNode[];
    size: number;
    title: string;
}

export function TechLogoContainer({
    children,
    size,
    title,
}: TechLogoContainerProps) {
    return (
        <TechLogoContainerStyled title={title} size={size}>
            {children}
        </TechLogoContainerStyled>
    );
}
