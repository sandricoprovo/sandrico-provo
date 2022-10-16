import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 40px;
`;

interface ContentContainerProps {
    children: ReactNode | ReactNode[];
}

export function ContentContainer({ children }: ContentContainerProps) {
    return <Container>{children}</Container>;
}
