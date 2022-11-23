import React, { ReactNode } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const TextLinkStyled = styled.button`
    border: none;
    background-color: transparent;
    font: var(--font-body);
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
}

export function TextLink({
    children,
    href,
    isExternal = false,
}: TextLinkProps) {
    return isExternal ? (
        <TextLinkStyled>
            <a
                href={href}
                title="External Link"
                rel="noreferrer noopener"
                target="_blank"
            >
                {children}
            </a>
        </TextLinkStyled>
    ) : (
        <TextLinkStyled>
            <Link href={href}>{children}</Link>
        </TextLinkStyled>
    );
}
