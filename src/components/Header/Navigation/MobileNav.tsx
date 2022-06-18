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
            ease: [0.65, 0, 0.35, 1],
            staggerChildren: 0.35,
        },
    },
    exit: {
        y: '100vh',
        transition: {
            duration: 0.4,
            delay: 0.1,
            ease: [0.65, 0, 0.35, 1],
        },
    },
};

const navLinkVariant = {
    initial: {
        y: 100,
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

    function calcNavLinkAnimate(position: number) {
        return {
            y: 0,
            transition: {
                delay: position * 0.4,
                duration: 1,
            },
        };
    }

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
                    {links.map((link, index) => {
                        const linkHref =
                            link.label === 'Home'
                                ? '/'
                                : link.label.toLowerCase();

                        const isCurrentPage =
                            router.pathname.includes(linkHref);

                        return (
                            <NavListItem key={link.label}>
                                <Link href={linkHref}>
                                    {!isCurrentPage ? (
                                        <NavLink
                                            open={showNav}
                                            initial={navLinkVariant.initial}
                                            animate={calcNavLinkAnimate(index)}
                                        >
                                            {link.label.toUpperCase()}
                                        </NavLink>
                                    ) : (
                                        <ActiveNavLink
                                            initial={navLinkVariant.initial}
                                            animate={calcNavLinkAnimate(index)}
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
