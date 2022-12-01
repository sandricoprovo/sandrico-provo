import React from 'react';
import styled from 'styled-components';

import { NAV_LINKS } from '../../content/navigation';

import { NavLink } from './NavLink';

const NavItemsList = styled.ul`
    display: flex;
    align-items: center;
    gap: 4px;
`;

export function NavBar() {
    return (
        <nav>
            <NavItemsList>
                {NAV_LINKS.map((link) => (
                    <li key={link.label.toLowerCase()}>
                        <NavLink link={link} />
                    </li>
                ))}
            </NavItemsList>
        </nav>
    );
}
