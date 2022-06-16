import { ForwardedRef } from 'react';
import styled from 'styled-components';
import { HTMLMotionProps, ForwardRefComponent } from 'framer-motion';

export interface IconProps extends HTMLMotionProps<any> {
    href?: string;
    color?: string;
    onClick?: () => void;
    ref?: ForwardedRef<HTMLDivElement> | ForwardedRef<HTMLAnchorElement>;
    size?: string;
    hoverclr?: string;
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
        display: flex; // Centers icon in its container
        width: ${({ size }) => (!size ? 'var(--icon-size)' : size)};
        height: ${({ size }) => (!size ? 'var(--icon-size)' : size)};
        cursor: ${({ href }) => (!href ? 'normal' : 'pointer')};
        color: ${({ color }) => (!color ? 'var(--clr-icon)' : color)};
        transition: color 350ms var(--fadeUp-bezier);

        &:hover {
            color: ${({ hoverclr }) =>
                !hoverclr ? 'var(--clr-icon)' : hoverclr};
        }
    `;

    const IconWithStyles: React.FC<IconProps> = (props) => (
        <StyledIcon
            ref={props.ref}
            variants={iconVariant}
            initial="initial"
            whileHover="animate"
            {...props}
        />
    );

    return IconWithStyles;
}

export default withIconStyles;
