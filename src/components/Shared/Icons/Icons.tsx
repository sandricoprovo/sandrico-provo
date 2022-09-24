import React from 'react';
import { Icon as IIcon } from 'react-feather';
import { LinkWrapper } from './LinkWrapper';

export interface IconProps {
    title: string;
    size?: number;
    color?: string;
    href?: string;
    onClick?: () => void;
}

const DEFAULT_PROPS: IconProps = {
    title: 'Icon',
};

// Handles applying consistent default styling to icons throughout the project
export function HOCIcon(Icon: IIcon, props: IconProps = DEFAULT_PROPS) {
    const defaultIconProps = {
        size: 24,
        color: 'var(--clr-icon)',
    };

    // Handles icon links
    if (props?.href) {
        return (
            <LinkWrapper>
                <a
                    title={props.title}
                    href={props.href}
                    rel="noopener noreferrer"
                    target="_Blank"
                >
                    <Icon {...defaultIconProps} {...props} />
                </a>
            </LinkWrapper>
        );
    }

    return <Icon {...defaultIconProps} {...props} />;
}
