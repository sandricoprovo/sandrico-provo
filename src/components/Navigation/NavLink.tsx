import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import { NavLink as INavLink } from '../../types/navlink';

const NavLinkStyled = styled.li`
    --padding-link: 24px;
    text-align: center;
    position: relative;
    font: var(--font-body);
    color: var(--clr-text);
    list-style: none;

    padding: 0 var(--padding-link);
    text-align: center;

    & > a {
        text-decoration: none;
        color: inherit;
    }

    &,
    & > a {
        transition: color 0.1s var(--easing-hover);
    }

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
        transform: translateY(-4px);
    }

    @media screen and (hover: hover) {
        &:hover {
            color: var(--clr-accent);
        }

        &:hover::after {
            opacity: 1;
            transform: translateY(0px);
        }
    }
`;

interface NavLinkProps {
    link: INavLink;
}

export function NavLink({ link }: NavLinkProps) {
    return (
        <NavLinkStyled>
            <Link href={link.href}>{link.label}</Link>
        </NavLinkStyled>
    );
}
