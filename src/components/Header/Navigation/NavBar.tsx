import Link from 'next/link';

import mockLinks from '../../../mock/navlinks';

import { NavBarContainer, NavLink } from './styles';

function NavBar() {
    return (
        <NavBarContainer>
            {mockLinks.map((link) => (
                <Link key={link.label} href={link.label}>
                    <NavLink>{link.label}</NavLink>
                </Link>
            ))}
        </NavBarContainer>
    );
}

export default NavBar;
