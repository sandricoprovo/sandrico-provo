import React from 'react';
import styled from 'styled-components';
import { TwitterIcon, LinkedinIcon, GitHubIcon } from '../Shared/Icons';
import { myInfo } from '../../content/myInfo';

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
                    href={myInfo.links.twitter}
                    size={32}
                />
                <LinkedinIcon
                    title="LinkedinIcon"
                    href={myInfo.links.linkedIn}
                    size={32}
                />
                <GitHubIcon
                    title="GitHubIcon"
                    href={myInfo.links.github}
                    size={32}
                />
            </div>
        </SocialTileStyled>
    );
}
