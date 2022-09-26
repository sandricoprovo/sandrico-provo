import React from 'react';
import styled from 'styled-components';

const ShortAboutStyled = styled.section`
    border: 2px solid red;
    width: 100%;
    height: 200px; // TEMP
    margin-bottom: var(--spacing-margin);
`;

export function ShortAbout() {
    return <ShortAboutStyled>About</ShortAboutStyled>;
}
