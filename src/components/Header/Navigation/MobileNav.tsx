import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
            delay: 0.1,
            ease: [0.08, 0.82, 0.17, 1],
            staggerChildren: 0.35,
        },
    },
    exit: {
        y: '100vh',
        transition: {
            duration: 0.4,
            delay: 0.1,
            ease: [0.08, 0.82, 0.17, 1],
        },
    },
};

const navItemVariants = {
    initial: { opacity: 0, y: '50%' },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.35,
            ease: [0.08, 0.82, 0.17, 1],
        },
    },
};

interface MobileNavProps {
    links: { label: string }[];
    isMobile: boolean;
    isNavOpen: boolean;
}

function MobileNav({ links, isMobile, isNavOpen }: MobileNavProps) {
    const [showNav, setShowNav] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        if (isMobile && isNavOpen) {
            setShowNav(true);
            return;
        }
        setShowNav(false);
    }, [isMobile, isNavOpen]);

    // TEST
    useEffect(() => {
        links.unshift({ label: 'Home' });
    }, []);
    // TEST

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
                        const linkHref =
                            link.label === 'Home'
                                ? '/'
                                : link.label.toLowerCase();

                        const isCurrentPage =
                            router.pathname.includes(linkHref);

                        return (
                            <NavListItem
                                key={link.label}
                                variants={navItemVariants}
                            >
                                <Link href={linkHref}>
                                    {!isCurrentPage ? (
                                        <NavLink>
                                            {link.label.toUpperCase()}
                                        </NavLink>
                                    ) : (
                                        <ActiveNavLink>
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
