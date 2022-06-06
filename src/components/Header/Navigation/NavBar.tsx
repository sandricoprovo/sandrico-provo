import Link from 'next/link';

import { NavBarContainer, NavList, NavListItem, NavLink } from './styles';

interface NavBarProps {
    links: { label: string }[];
}

function NavBar({ links }: NavBarProps) {
    return (
        <NavBarContainer>
            <NavList>
                {links.map((link, index) => {
                    // animationDelay = base * (delay multiplier * (index + index normalizer))
                    const animationDelay = 300 * (0.5 * (index + 1));
                    return (
                        <NavListItem
                            key={link.label}
                            animationDelay={animationDelay}
                        >
                            <Link href={link.label}>
                                <NavLink>{link.label}</NavLink>
                            </Link>
                        </NavListItem>
                    );
                })}
            </NavList>
        </NavBarContainer>
    );
}

export default NavBar;
