import React from 'react';
import styled from 'styled-components';

import { Children } from '../../../types/children';

const IconWrapperStyled = styled.span`
    padding: 8px 8px 8px 0; // Gives better surface area for presses
    color: var(--clr-text);
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

type IconWrapperProps = WrapperProps;

interface IconLinkWrapperProps extends WrapperProps {
    href: string;
}

export function IconWrapper({ children, title }: IconWrapperProps) {
    return <IconWrapperStyled title={title}>{children}</IconWrapperStyled>;
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