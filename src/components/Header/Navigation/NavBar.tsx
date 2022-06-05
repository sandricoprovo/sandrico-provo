import Link from 'next/link';

import { NavBarContainer, NavLink } from './styles';

interface NavBarProps {
    links: { label: string }[];
}

function NavBar({ links }: NavBarProps) {
    return (
        <NavBarContainer>
            {links.map((link, index) => {
                // animationDelay = base * (delay multiplier * (index + index normalizer))
                const animationDelay = 300 * (0.5 * (index + 1));
                return (
                    <Link key={link.label} href={link.label}>
                        <NavLink animationDelay={animationDelay}>
                            {link.label}
                        </NavLink>
                    </Link>
                );
            })}
        </NavBarContainer>
    );
}

export default NavBar;
