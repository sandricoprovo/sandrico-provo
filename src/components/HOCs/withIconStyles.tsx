import { ForwardedRef } from 'react';
import styled from 'styled-components';
import { HTMLMotionProps, ForwardRefComponent } from 'framer-motion';

export interface IconProps extends HTMLMotionProps<any> {
    href?: string;
    color?: string;
    cursor?: string;
    onClick?: () => void;
    disabled?: boolean;
    ref?: ForwardedRef<HTMLDivElement> | ForwardedRef<HTMLAnchorElement>;
    size?: string;
    hoverclr?: string;
}

type MotionIcon = ForwardRefComponent<HTMLOrSVGElement, HTMLMotionProps<any>>;

const iconVariant = {
    initial: { y: '0%' },
    animate: {
        y: ['0%', '-25%', '0%'],
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
        cursor: ${({ cursor }) => (!cursor ? '' : cursor)};
        cursor: ${({ href, onClick, disabled }) =>
            !href && !onClick && disabled ? 'normal' : 'pointer'};
        color: ${({ color }) => (!color ? 'var(--clr-icon)' : color)};
        color: ${({ disabled }) =>
            !disabled ? 'var(--clr-icon)' : 'var(--clr-icon-disabled)'};
        transition: color 350ms var(--fadeUp-bezier);

        &:hover {
            color: ${({ hoverclr, disabled }) =>
                !hoverclr || disabled ? '' : hoverclr};
        }
    `;

    const IconWithStyles: React.FC<IconProps> = ({
        href,
        color,
        cursor,
        onClick,
        disabled,
        ref,
        size,
        hoverclr,
    }: IconProps) => (
        <StyledIcon
            ref={ref}
            variants={iconVariant}
            initial="initial"
            whileHover={!disabled ? 'animate' : 'initial'}
            disabled={disabled}
            href={href}
            color={color}
            cursor={cursor}
            onClick={!disabled ? onClick : null}
            size={size}
            hoverclr={hoverclr}
        />
    );

    return IconWithStyles;
}

export default withIconStyles;
