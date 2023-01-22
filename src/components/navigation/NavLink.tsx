import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import { NavLink as INavLink } from '../../types/navlink';

const NavLinkStyled = styled(Link)`
    --padding-link: 16px;
    text-align: center;
    position: relative;
    font: var(--font-body);
    color: var(--clr-text);
    list-style: none;
    padding: 0 var(--padding-link);
    text-align: center;
    text-decoration: none;
    color: inherit;
    transition: color 0.1s var(--easing-hover);

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        height: 1px;
        width: calc(100% - (var(--padding-link) * 2));
        background-color: var(--clr-accent);
        opacity: 0;
        transition: opacity var(--hover-duration) var(--easing-hover),
            transform var(--hover-duration) var(--easing-hover);
        transform: translateY(-2px);
    }

    @media screen and (hover: hover) {
        &:hover,
        &:focus {
            color: var(--clr-accent);
        }

        &:hover::after,
        &:focus::after {
            opacity: 1;
            transform: translateY(2px);
        }
    }
`;

interface NavLinkProps {
    link: INavLink;
}

export function NavLink({ link }: NavLinkProps) {
    return (
        <NavLinkStyled href={link.href} tabIndex={0}>
            {link.label}
        </NavLinkStyled>
    );
}
