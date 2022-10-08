import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence, Variants } from 'framer-motion';

import { NAV_LINKS } from '../../../content/navLinks';
import { MenuBtn } from './MenuBtn';
import { NavDrawerLink } from './NavDrawerLink';
import { NavDrawerFooter } from './NavDrawerFooter';

const Drawer = styled(motion.nav)`
    position: absolute;
    background-color: var(--clr-background);
    height: 80vh;
    width: 93vw;
    padding-top: 3rem;
    z-index: 200;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 2rem;

    & > div:nth-of-type(1) {
        display: flex;
        flex-direction: column;
    }

    & > div > li {
        margin: 1.5rem 0;
    }

    & > div:nth-child(2) {
        margin-bottom: 2rem;
    }

    & > div > li:active > a {
        color: var(--clr-text-active);
    }
`;

const drawerVariants: Variants = {
    initial: { y: '-100%' },
    animate: {
        y: '56%',
        transition: {
            duration: 0.8,
            bounce: 0,
            ease: [0.65, 0.05, 0.36, 1],
        },
    },
    exit: {
        y: '-100%',
        transition: {
            delay: 0.3,
            duration: 0.8,
            bounce: 0,
            ease: [0.65, 0.05, 0.36, 1],
        },
    },
};

export function NavDrawer() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleDrawer() {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <MenuBtn isDrawerOpen={isOpen} toggleDrawerHandler={toggleDrawer} />
            <AnimatePresence>
                {isOpen && (
                    <Drawer
                        variants={drawerVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <div>
                            {NAV_LINKS.map((link, index) => (
                                <NavDrawerLink
                                    key={link.label}
                                    href={link.href}
                                    label={link.label}
                                    order={index}
                                    toggleDrawer={toggleDrawer}
                                />
                            ))}
                        </div>
                        <NavDrawerFooter />
                    </Drawer>
                )}
            </AnimatePresence>
        </>
    );
}
