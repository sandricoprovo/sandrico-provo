import React, { ReactNode } from 'react';
import styled from 'styled-components';

const ShortAboutStyled = styled.section`
    border: 2px solid red;
    width: 100%;
    margin-bottom: var(--spacing-margin);
    padding: 0 var(--spacing-content-mobile);

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`;

export function ShortAboutContainer({
    children,
}: {
    children: ReactNode | ReactNode[];
}) {
    return <ShortAboutStyled>{children}</ShortAboutStyled>;
}
