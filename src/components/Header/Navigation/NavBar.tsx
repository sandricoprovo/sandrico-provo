/* eslint-disable no-nested-ternary */
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import MenuBtn from './MenuBtn';
import { NavBarContainer, NavList, NavListItem, NavLink } from './styles';

interface NavBarProps {
    links: { label: string }[];
}

const navBarVariant = {
    hidden: { opacity: 0, y: '50%' },
    shown: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            delay: 0.4,
            ease: [0.77, 0, 0.18, 1],
        },
    },
};

function NavBar({ links }: NavBarProps) {
    const [isMobile, setIsMobile] = useState<boolean>(false);
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
        <NavList
            key="mobileNav"
            variants={navBarVariant}
            initial="hidden"
            animate="shown"
            exit="hidden"
        >
            <AnimatePresence>
                {links.map((link, index) => (
                    <NavListItem
                        key={link.label}
                        initial={{ opacity: 0, y: '50%' }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.35,
                            delay: (index + 1) * 0.4,
                            ease: [0.08, 0.82, 0.17, 1],
                        }}
                        exit={{ opacity: 0, y: '50%' }}
                    >
                        <Link href={link.label}>
                            <NavLink>{link.label}</NavLink>
                        </Link>
                    </NavListItem>
                ))}
            </AnimatePresence>
            {/* <p>Build. Colab. Create.</p> */}
        </NavList>
    );

    return (
        <NavBarContainer>
            {/* {!isMobile ? navList : isNavOpen ? navList : null} */}
            <AnimatePresence>
                {!isMobile ? navList : isNavOpen ? navList : null}
            </AnimatePresence>
            {isMobile ? <MenuBtn onClickHandler={toggleNavMenu} /> : null}
        </NavBarContainer>
    );
}

export default NavBar;
