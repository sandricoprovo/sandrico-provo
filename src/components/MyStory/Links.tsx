import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 24px;
`;

interface LinksProps {
    children: ReactNode | ReactNode[];
}

export default function Links({ children }: LinksProps) {
    return <Container>{children}</Container>;
}
