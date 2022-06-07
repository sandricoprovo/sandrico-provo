/* eslint-disable no-nested-ternary */
import Link from 'next/link';
import { useEffect, useState } from 'react';

import MenuBtn from './MenuBtn';
import { NavBarContainer, NavList, NavListItem, NavLink } from './styles';

interface NavBarProps {
    links: { label: string }[];
}

function NavBar({ links }: NavBarProps) {
    const [isMobile, setIsMobile] = useState<boolean>(true);
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

    function toggleNavMenu() {
        if (isNavOpen) {
            setTimeout(() => {
                setIsNavOpen(!isNavOpen);
            }, 600);
        } else {
            setIsNavOpen(!isNavOpen);
        }
    }

    function checkIfMobile() {
        if (window.innerWidth < 600) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }

    useEffect(() => {
        if (window.innerWidth < 600) setIsMobile(true);

        window.addEventListener('resize', checkIfMobile);

        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    const navList = (
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
            {/* <p>Build. Colab. Create.</p> */}
        </NavList>
    );

    return (
        <NavBarContainer>
            {/* {!isMobile ? navList : isNavOpen ? navList : null} */}
            {!isMobile ? navList : isNavOpen ? navList : null}
            {isMobile ? <MenuBtn onClickHandler={toggleNavMenu} /> : null}
        </NavBarContainer>
    );
}

export default NavBar;
