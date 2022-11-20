import { IconProps } from '../../types/icon';

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

    if (props?.href) {
        // Handles removing the onClick method because <a> tags
        // already have click.
        const { onClick, href, ...rest } = iconProps;

        return (
            <a
                rel="noopener noreferrer"
                target="_Blank"
                title={iconProps.title}
                href={href}
            >
                <Icon {...rest} />
            </a>
        );
    }

    return (
        <span title={props.title}>
            <Icon {...iconProps} />
        </span>
    );
}
