import React from 'react';
import styled from 'styled-components';

import { GithubIcon, LinkedInIcon, TwitterIcon } from './shared/icons';

const HeaderStyled = styled.header`
    padding-block: var(--spg-padding-block);
    margin-block-end: var(--spg-section);
    background-color: var(--clr-background);
    width: 100%;
    max-width: var(--spg-layout-max-width);
    margin-inline: auto;

    display: flex;
    align-items: center;
    gap: 20px;
`;

export function Header() {
    return (
        <HeaderStyled>
            <TwitterIcon />
            <LinkedInIcon />
            <GithubIcon />
        </HeaderStyled>
    );
}
