import { IconProps } from '../../../types/icon';
import { withIconStyles } from '../../hoc/withIconStyles';

import { Twitter } from './Twitter';
import { GitHub } from './GitHub';
import { LinkedIn } from './LinkedIn';
import { File } from './File';
import { ExternalLink } from './ExternalLink';
import { Youtube } from './Youtube';
import { Trash } from './Trash';
import { Send } from './Send';
import { Spinner } from './Spinner';

export function TwitterIcon(props: IconProps) {
    const customProps = {
        title: 'Twitter',
        ...props,
    };
    return withIconStyles(Twitter, customProps);
}
export function GithubIcon(props: IconProps) {
    const customProps = {
        title: 'GitHub',
        ...props,
    };
    return withIconStyles(GitHub, customProps);
}
export function LinkedInIcon(props: IconProps) {
    const customProps = {
        title: 'LinkedIn',
        ...props,
    };
    return withIconStyles(LinkedIn, customProps);
}
export function FileIcon(props: IconProps) {
    const customProps = {
        title: 'Resume',
        ...props,
    };
    return withIconStyles(File, customProps);
}
export function ExternalLinkIcon(props: IconProps) {
    const customProps = {
        title: 'Link',
        ...props,
    };
    return withIconStyles(ExternalLink, customProps);
}
export function YoutubeIcon(props: IconProps) {
    const customProps = {
        title: 'Youtube',
        ...props,
    };
    return withIconStyles(Youtube, customProps);
}
export function TrashIcon(props: IconProps) {
    const customProps = {
        title: 'Clear',
        ...props,
    };
    return withIconStyles(Trash, customProps);
}
export function SendIcon(props: IconProps) {
    const customProps = {
        title: 'Send',
        ...props,
    };
    return withIconStyles(Send, customProps);
}
export function SpinnerIcon(props: IconProps) {
    const customProps = {
        title: 'Loading',
        ...props,
    };
    return withIconStyles(Spinner, customProps);
}
