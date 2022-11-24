import React, { ReactNode } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const TextLinkStyled = styled.button`
    border: none;
    background-color: transparent;
    font: var(--font-body);
    font-size: inherit; // Overwrites set font size if parent sets font size.
    cursor: pointer;
    position: relative;
    text-align: left;

    & a {
        transition: color 0.2s var(--easing-hover);
        color: var(--clr-text-header);
        text-decoration: none;
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        opacity: 1;
        transform: translateY(-4px);
        transition: transform 0.3s var(--easing-hover),
            opacity 0.3s var(--easing-hover);
        background-color: var(--clr-text-header);
    }

    @media screen and (hover: hover) {
        &:hover {
            & a {
                color: var(--clr-accent);
            }

            &::after {
                opacity: 1;
                transform: translateY(-2px);
            }
        }

        &::after {
            opacity: 0;
            background-color: var(--clr-accent);
        }
    }
`;

interface TextLinkProps {
    children: ReactNode | ReactNode[];
    href: string;
    isExternal?: boolean;
    title?: string;
}

export function TextLink({
    children,
    href,
    isExternal = false,
    title = 'Link',
}: TextLinkProps) {
    return isExternal ? (
        <TextLinkStyled title={title}>
            <a
                href={href}
                rel="noreferrer noopener"
                target="_blank"
                title={title}
            >
                {children}
            </a>
        </TextLinkStyled>
    ) : (
        <TextLinkStyled title={title}>
            <Link href={href}>{children}</Link>
        </TextLinkStyled>
    );
}
