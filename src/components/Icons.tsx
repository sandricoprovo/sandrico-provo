import {
    IconBrandGithub,
    IconBrandTwitter,
    IconExternalLink,
    IconBrandYoutube,
    IconArrowNarrowRight,
    IconFile,
    IconCopyright,
    IconLine,
    IconBrandLinkedin,
    IconArrowNarrowLeft,
} from '@tabler/icons';

import withIconStyles from './HOCs/withIconStyles';
import withIconMotions from './HOCs/withIconMotions';

export const GitHubIcon = withIconStyles(withIconMotions(IconBrandGithub));
export const TwitterIcon = withIconStyles(withIconMotions(IconBrandTwitter));
export const YouTubeIcon = withIconStyles(withIconMotions(IconBrandYoutube));
export const FileIcon = withIconStyles(withIconMotions(IconFile));
export const CopyRightIcon = withIconStyles(withIconMotions(IconCopyright));
export const LineIcon = withIconStyles(withIconMotions(IconLine));
export const LinkedInIcon = withIconStyles(withIconMotions(IconBrandLinkedin));
export const ArrowRightIcon = withIconStyles(
    withIconMotions(IconArrowNarrowRight)
);
export const ArrowLeftIcon = withIconStyles(
    withIconMotions(IconArrowNarrowLeft)
);
export const ExternalLinkIcon = withIconStyles(
    withIconMotions(IconExternalLink)
);
