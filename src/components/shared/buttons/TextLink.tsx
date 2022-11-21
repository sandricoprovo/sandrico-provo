import React, { ReactNode } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const TextLinkStyled = styled.button`
    border: none;
    background-color: transparent;
    font: var(--font-reg);
    cursor: pointer;
    position: relative;

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
        opacity: 0;
        transform: translateY(-4px);
        transition: transform 0.3s var(--easing-hover),
            opacity 0.3s var(--easing-hover);
        background-color: var(--clr-accent);
    }

    &:hover {
        & a {
            color: var(--clr-accent);
        }

        &::after {
            opacity: 1;
            transform: translateY(-2px);
        }
    }
`;

interface TextLinkProps {
    children: ReactNode | ReactNode[];
    href: string;
}

export function TextLink({ children, href }: TextLinkProps) {
    return (
        <TextLinkStyled>
            <Link href={href}>{children}</Link>
        </TextLinkStyled>
    );
}
