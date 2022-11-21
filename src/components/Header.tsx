import React from 'react';
import styled from 'styled-components';

import { GithubIcon, LinkedInIcon, TwitterIcon } from './shared/icons';

const HeaderStyled = styled.header`
    padding-block: var(--spg-padding-block);
    margin: 0 auto var(--spg-section) auto;
    background-color: var(--clr-background);
    width: 100%;
    max-width: var(--spg-layout-max-width);

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
