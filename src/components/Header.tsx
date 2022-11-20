import React from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.header`
    padding-top: var(--spg-padding-block);
    background-color: var(--clr-background);
    padding-inline: var(--spg-padding-inline);
`;

export function Header() {
    return <HeaderStyled>Header</HeaderStyled>;
}
