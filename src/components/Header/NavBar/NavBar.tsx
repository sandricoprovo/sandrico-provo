import React from 'react';
import styled from 'styled-components';

import { NAV_LINKS } from '../../../content/navLinks';
import { NavLink } from './NavLink';

const NavigationStyled = styled.nav`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
`;

export const NavBar = () => {
    console.log('navbar');

    return (
        <NavigationStyled>
            {NAV_LINKS.map((link) => (
                <NavLink key={link.label} href={link.href} label={link.label} />
            ))}
        </NavigationStyled>
    );
};
