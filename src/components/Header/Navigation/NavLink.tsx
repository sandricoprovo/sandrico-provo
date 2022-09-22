import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const NavLinkStyled = styled.li`
    list-style: none;

    & > a {
        color: var(--clr-text);
        text-decoration: none;
    }
`;

interface NavLinkProps {
    href: string;
    label: string;
}

export const NavLink = ({ href, label }: NavLinkProps) => (
    <NavLinkStyled>
        <Link href={href} passHref>
            <a className="body">{label}</a>
        </Link>
    </NavLinkStyled>
);
