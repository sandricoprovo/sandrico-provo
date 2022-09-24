import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const NavLinkStyled = styled.li`
    list-style: none;

    & > a {
        color: var(--clr-text);
        font-family: var(--font-header);
        text-decoration: none;
    }
`;

interface NavDrawerLinkProps {
    href: string;
    label: string;
    toggleDrawer: () => void;
}

export function NavDrawerLink({
    href,
    label,
    toggleDrawer,
}: NavDrawerLinkProps) {
    return (
        <NavLinkStyled onClick={toggleDrawer}>
            <Link href={href} passHref>
                <a className="header-4">{label}</a>
            </Link>
        </NavLinkStyled>
    );
}
