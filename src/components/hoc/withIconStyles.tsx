import { IconProps } from '../../types/icon';
import { IconLinkWrapper, IconWrapper } from '../shared/icons/IconWrappers';

const DEFAULT_PROPS: IconProps = {
    title: 'Icon',
    size: 24,
    color: 'var(--clr-icon)',
};

// Handles applying consistent default styling to icons throughout the project
export function withIconStyles(Icon: React.FC<IconProps>, props: IconProps) {
    // DEFAULT_PROPS will be over-written if props has same property inside.
    const iconProps = {
        ...DEFAULT_PROPS,
        ...props,
    };

    if (iconProps?.href) {
        // Handles removing the onClick method because <a> tags
        // already have click.
        const { onClick, href, label, ...rest } = iconProps;

        return (
            <IconLinkWrapper title={iconProps?.title || 'Link'} href={href}>
                {label || null} <Icon {...rest} />
            </IconLinkWrapper>
        );
    }

    return (
        <IconWrapper title={iconProps?.title || 'Icon'}>
            {iconProps?.label || null} <Icon {...iconProps} />
        </IconWrapper>
    );
}
