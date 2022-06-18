import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';

import MenuBtn from './MenuBtn';
import { NavBarContainer, NavList, NavListItem, NavLink } from './styles';

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

interface NavBarProps {
    links: { label: string }[];
    showMobileNav: boolean;
    toggleMobileNav: () => void;
}

function NavBar({ links, showMobileNav, toggleMobileNav }: NavBarProps) {
    return (
        <NavBarContainer>
            {showMobileNav ? (
                <MenuBtn onClickHandler={toggleMobileNav} />
            ) : (
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
                </NavList>
            )}
        </NavBarContainer>
    );
}

export default NavBar;
