import React from 'react';
import styled from 'styled-components';

import { Socials } from './Socials';

const HeaderStyled = styled.header`
    margin: 0 auto;
    width: 100%;
    max-width: var(--spg-layout-max-width);
    padding-block: var(--spg-padding-block);
    background-color: transparent;

    display: flex;
    align-items: center;
    gap: 20px;
`;

export function Header() {
    return (
        <HeaderStyled id="top">
            <Socials hideLabel />
        </HeaderStyled>
    );
}
