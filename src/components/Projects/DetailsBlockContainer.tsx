import React, { ReactNode } from 'react';
import styled from 'styled-components';

const DetailsBlockContainerStyled = styled.section`
    padding: 0 var(--spacing-content-mobile);
    margin-bottom: var(--spacing-margin);

    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 160px;

    @media (min-width: 575px) {
        padding: 0 var(--spacing-content);
    }
`;

interface DetailsBlockContainerProps {
    children: ReactNode | ReactNode[];
}

export function DetailsBlockContainer({
    children,
}: DetailsBlockContainerProps) {
    return (
        <DetailsBlockContainerStyled>{children}</DetailsBlockContainerStyled>
    );
}
