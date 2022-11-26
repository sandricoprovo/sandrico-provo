import React from 'react';
import styled from 'styled-components';

import { Children } from '../../../types/children';
import { IconProps } from '../../../types/icon';

const IconWrapperStyled = styled.span<{ animation: IconProps['animation'] }>`
    padding: 8px 8px 8px 0; // Gives better surface area for presses
    color: var(--clr-text);
    font: var(--font-body);
    transition: color var(--hover-duration) var(--easing-hover);

    display: flex;
    align-items: center;
    gap: 8px;

    animation-name: ${({ animation }) => animation};
    animation-duration: 0.8s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    & > svg {
        transition: fill var(--hover-duration) var(--easing-hover),
            transform var(--hover-duration) var(--easing-hover);
    }

    @media screen and (hover: hover) {
        &:hover {
            color: var(--clr-accent);

            & > svg {
                transform: scale(1.1);
            }
        }
    }
`;

const IconLinkWrapperStyled = styled.a`
    padding: 8px 8px 8px 0; // Gives better surface area for presses
    color: var(--clr-text);
    text-decoration: none;
    font: var(--font-body);
    transition: color var(--hover-duration) var(--easing-hover);

    display: flex;
    align-items: center;
    gap: 8px;

    & > svg {
        transition: fill var(--hover-duration) var(--easing-hover),
            transform var(--hover-duration) var(--easing-hover);
    }

    @media screen and (hover: hover) {
        &:hover {
            color: var(--clr-accent);

            & > svg {
                transform: scale(1.1);
            }
        }
    }
`;

interface WrapperProps {
    children: Children;
    title: string;
}

interface IconWrapperProps extends WrapperProps {
    animation?: IconProps['animation'];
}

interface IconLinkWrapperProps extends WrapperProps {
    href: string;
}

export function IconWrapper({ children, title, animation }: IconWrapperProps) {
    return (
        <IconWrapperStyled title={title} animation={animation}>
            {children}
        </IconWrapperStyled>
    );
}

export function IconLinkWrapper({
    children,
    href,
    title,
}: IconLinkWrapperProps) {
    return (
        <IconLinkWrapperStyled
            rel="noopener noreferrer"
            target="_blank"
            title={title}
            href={href}
        >
            {children}
        </IconLinkWrapperStyled>
    );
}
