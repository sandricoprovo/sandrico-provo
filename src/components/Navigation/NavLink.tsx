import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import { NavLink as INavLink } from '../../types/navlink';

const NavLinkStyled = styled.li`
    text-align: center;
    position: relative;
    font: var(--font-body);
    color: var(--clr-text);
    list-style: none;

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
        height: 1px;
        width: 100%;
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
