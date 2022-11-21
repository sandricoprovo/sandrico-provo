import { IconProps } from '../../../types/icon';
import { withIconStyles } from '../../hoc/withIconStyles';

import { Twitter } from './Twitter';
import { GitHub } from './GitHub';
import { LinkedIn } from './LinkedIn';
import { File } from './File';
import { ExternalLink } from './ExternalLink';
import { Youtube } from './Youtube';

export function TwitterIcon(props: IconProps) {
    const customProps = {
        ...props,
        title: 'Twitter',
    };
    return withIconStyles(Twitter, customProps);
}
export function GithubIcon(props: IconProps) {
    const customProps = {
        ...props,
        title: 'GitHub',
    };
    return withIconStyles(GitHub, customProps);
}
export function LinkedInIcon(props: IconProps) {
    const customProps = {
        ...props,
        title: 'LinkedIn',
    };
    return withIconStyles(LinkedIn, customProps);
}
export function FileIcon(props: IconProps) {
    const customProps = {
        ...props,
        title: 'Resume',
    };
    return withIconStyles(File, customProps);
}
export function ExternalLinkIcon(props: IconProps) {
    const customProps = {
        ...props,
        title: 'Link',
    };
    return withIconStyles(ExternalLink, customProps);
}
export function YoutubeIcon(props: IconProps) {
    const customProps = {
        ...props,
        title: 'Youtube',
    };
    return withIconStyles(Youtube, customProps);
}
