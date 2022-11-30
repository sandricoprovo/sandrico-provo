import React from 'react';
import styled from 'styled-components';

import { NAV_LINKS } from '../../content/navigation';

import { NavLink } from './NavLink';

const NavBarStyled = styled.nav`
    & > ul {
        display: flex;
        align-items: center;
        gap: 40px;
    }
`;

export function NavBar() {
    return (
        <NavBarStyled>
            <ul>
                {NAV_LINKS.map((link) => (
                    <NavLink link={link} />
                ))}
            </ul>
        </NavBarStyled>
    );
}
