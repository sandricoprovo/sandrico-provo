import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { HeaderLink } from '../../../types/Header';

import {
    MobileNavList,
    NavListItem,
    NavLink,
    MobileNavContent,
    ActiveNavLink,
} from './styles';

const mobileNavVariant = {
    initial: { y: '100vh' },
    animate: {
        y: '0',
        transition: {
            when: 'beforeChildren',
            duration: 0.4,
            ease: [0.65, 0, 0.35, 1],
            staggerChildren: 0.35,
        },
    },
    exit: {
        y: '100vh',
        transition: {
            duration: 0.4,
            ease: [0.65, 0, 0.35, 1],
        },
    },
};

interface MobileNavProps {
    links: HeaderLink[];
    isMobile: boolean;
    isNavOpen: boolean;
    toggleMobileNav: () => void;
}

function MobileNav({
    links,
    isMobile,
    isNavOpen,
    toggleMobileNav,
}: MobileNavProps) {
    const [showNav, setShowNav] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        if (isMobile && isNavOpen) {
            setShowNav(true);
            return;
        }
        setShowNav(false);
    }, [isMobile, isNavOpen]);

    return (
        <AnimatePresence>
            {showNav && (
                <MobileNavList
                    variants={mobileNavVariant}
                    key="mobileNav"
                    initial="initial"
                    animate={!showNav ? 'initial' : 'animate'}
                    exit="exit"
                >
                    {links.map((link) => {
                        const isCurrentPage = router.pathname === link.url;

                        return (
                            <NavListItem key={link.label}>
                                <Link href={link.url}>
                                    {!isCurrentPage ? (
                                        <NavLink
                                            open={showNav}
                                            onClick={toggleMobileNav}
                                        >
                                            {link.label.toUpperCase()}
                                        </NavLink>
                                    ) : (
                                        <ActiveNavLink
                                            onClick={toggleMobileNav}
                                        >
                                            {link.label.toUpperCase()}
                                        </ActiveNavLink>
                                    )}
                                </Link>
                            </NavListItem>
                        );
                    })}
                    <MobileNavContent>
                        <p>Based in Halifax Nova Scotia Canada</p>
                        <p>Currently a Software Developer at REDspace</p>
                    </MobileNavContent>
                </MobileNavList>
            )}
        </AnimatePresence>
    );
}

export default MobileNav;
