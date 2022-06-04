import Link from 'next/link';

import { NavBarContainer, NavLink } from './styles';

interface NavBarProps {
    links: { label: string }[];
}

function NavBar({ links }: NavBarProps) {
    return (
        <NavBarContainer>
            {links.map((link) => (
                <Link key={link.label} href={link.label}>
                    <NavLink>{link.label}</NavLink>
                </Link>
            ))}
        </NavBarContainer>
    );
}

export default NavBar;
