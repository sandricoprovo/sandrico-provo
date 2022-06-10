import { ForwardedRef } from 'react';
import styled from 'styled-components';
import { HTMLMotionProps, ForwardRefComponent } from 'framer-motion';

export interface IconProps extends HTMLMotionProps<any> {
    href?: string;
    color?: string;
    onClick?: () => void;
    ref?: ForwardedRef<HTMLDivElement> | ForwardedRef<HTMLAnchorElement>;
}

type MotionIcon = ForwardRefComponent<HTMLOrSVGElement, HTMLMotionProps<any>>;

const iconVariant = {
    initial: { y: 0 },
    animate: {
        y: ['0%', '-25%', '-15%'],
        transition: {
            duration: 0.4,
        },
    },
};

function withIconStyles(Icon: MotionIcon) {
    // Extends the Icon to use custom HOC styling & props.
    const StyledIcon = styled(Icon)<IconProps>`
        text-decoration: none;
        width: var(--icon-size);
        height: var(--icon-size);
        cursor: ${({ href }) => (!href ? 'normal' : 'pointer')};
        color: ${({ color }) => (!color ? 'var(--clr-icon)' : color)};
    `;

    const IconWithStyles: React.FC<IconProps> = (props) => (
        <StyledIcon
            ref={props.ref}
            variants={iconVariant}
            initial="initial"
            whileHover="animate"
            // initial={{ y: 0 }}
            // whileHover={{ y: ['-20%', '-10%'] }}
            {...props}
        />
    );

    return IconWithStyles;
}

export default withIconStyles;
