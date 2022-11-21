import React from 'react';
import styled from 'styled-components';

import { GithubIcon, LinkedInIcon, TwitterIcon } from './shared/icons';

const HeaderStyled = styled.header`
    padding-block: var(--spg-padding-block);
    background-color: var(--clr-background);
    padding-inline: var(--spg-padding-inline);
    margin-bottom: var(--spg-section);

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
