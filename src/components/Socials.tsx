import React from 'react';

import { aboutMe } from '../content/aboutMe';

import { IconsContainer } from './containers/IconsContainer';
import { GithubIcon, LinkedInIcon, TwitterIcon } from './shared/icons';

export function Socials() {
    const {
        links: { github, linkedIn, twitter },
    } = aboutMe;

    return (
        <IconsContainer>
            <TwitterIcon title="Twitter" href={twitter} label="Twitter" />
            <LinkedInIcon title="LinkedIn" href={linkedIn} label="LinkedIn" />
            <GithubIcon title="GitHub" href={github} label="GitHub" />
        </IconsContainer>
    );
}
