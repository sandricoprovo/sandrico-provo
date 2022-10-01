import React from 'react';
import styled from 'styled-components';
import { TwitterIcon, LinkedinIcon, GitHubIcon } from '../Shared/Icons';

const SocialTileStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    & > p {
        font-family: var(--font-header);
        color: var(--clr-text);
    }

    & > div {
        display: flex;
        align-items: center;
        gap: 24px;
    }
`;

export function SocialsTile() {
    return (
        <SocialTileStyled>
            <p>Socials</p>
            <div>
                <TwitterIcon
                    title="TwitterIcon"
                    href="https://google.ca"
                    size={32}
                />
                <LinkedinIcon
                    title="LinkedinIcon"
                    href="https://google.ca"
                    size={32}
                />
                <GitHubIcon
                    title="GitHubIcon"
                    href="https://google.ca"
                    size={32}
                />
            </div>
        </SocialTileStyled>
    );
}
