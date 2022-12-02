import React from 'react';

import { aboutMe } from '../content/aboutMe';

import { IconsContainer } from './containers/IconsContainer';
import { GithubIcon, LinkedInIcon, TwitterIcon } from './shared/icons';

interface SocialsProps {
    hideLabel?: boolean;
}

export function Socials({ hideLabel }: SocialsProps) {
    const {
        links: { github, linkedIn, twitter },
    } = aboutMe;

    return (
        <IconsContainer>
            <TwitterIcon
                title="Twitter"
                href={twitter}
                label={hideLabel ? '' : 'Twitter'}
                order={0}
            />
            <LinkedInIcon
                title="LinkedIn"
                href={linkedIn}
                label={hideLabel ? '' : 'LinkedIn'}
                order={1}
            />
            <GithubIcon
                title="GitHub"
                href={github}
                label={hideLabel ? '' : 'GitHub'}
                order={2}
            />
        </IconsContainer>
    );
}
