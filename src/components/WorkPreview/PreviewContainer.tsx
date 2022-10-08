import React, { ReactNode } from 'react';
import styled from 'styled-components';

const PreviewContainerStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: 4rem;
`;

interface PreviewContainerProps {
    children: ReactNode | ReactNode[];
}

export function PreviewContainer({ children }: PreviewContainerProps) {
    return <PreviewContainerStyled>{children}</PreviewContainerStyled>;
}
