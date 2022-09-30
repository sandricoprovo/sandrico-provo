import { HOCIcon, IconProps } from './Icons';
import {
    Twitter,
    GitHub,
    Linkedin,
    ArrowRight,
    ExternalLink,
    File,
} from 'react-feather';

// Exported Icons
export const TwitterIcon = (props: IconProps) => HOCIcon(Twitter, props);
export const GitHubIcon = (props: IconProps) => HOCIcon(GitHub, props);
export const LinkedinIcon = (props: IconProps) => HOCIcon(Linkedin, props);
export const ArrowRightIcon = (props: IconProps) => HOCIcon(ArrowRight, props);
export const ExternalLinkIcon = (props: IconProps) =>
    HOCIcon(ExternalLink, props);
export const FileIcon = (props: IconProps) => HOCIcon(File, props);
