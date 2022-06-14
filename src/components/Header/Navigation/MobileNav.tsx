import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';

import { MobileNavList, NavListItem, NavLink } from './styles';

const mobileNavVariant = {
    initial: { opacity: 0, y: '50%', zIndex: -1 },
    animate: {
        opacity: 1,
        y: 0,
        zIndex: 100,
        transition: {
            duration: 0.4,
            delay: 0.4,
            ease: [0.08, 0.82, 0.17, 1],
        },
    },
    exit: { opacity: 0, zIndex: -1 },
};

interface MobileNavProps {
    links: { label: string }[];
    isMobile: boolean;
    isNavOpen: boolean;
}

function MobileNav({ links, isMobile, isNavOpen }: MobileNavProps) {
    const [showNav, setShowNav] = useState<boolean>(false);

    useEffect(() => {
        if (isMobile && isNavOpen) {
            setShowNav(true);
            return;
        }
        setShowNav(false);
    }, [isMobile, isNavOpen]);

    return (
        <AnimatePresence>
            <MobileNavList
                variants={mobileNavVariant}
                key="mobileNav"
                initial="initial"
                animate={!showNav ? 'initial' : 'animate'}
                exit="exit"
            >
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
            </MobileNavList>
        </AnimatePresence>
    );
}

export default MobileNav;
