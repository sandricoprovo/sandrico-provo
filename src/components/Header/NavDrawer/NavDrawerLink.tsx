import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const NavLinkStyled = styled(motion.li)`
    list-style: none;

    & > a {
        color: var(--clr-text);
        font-family: var(--font-header);
        font-size: var(--font-xxl);
        text-decoration: none;
    }
`;

interface NavDrawerLinkProps {
    href: string;
    label: string;
    order: number;
    toggleDrawer: () => void;
}

export function NavDrawerLink({
    href,
    label,
    order,
    toggleDrawer,
}: NavDrawerLinkProps) {
    return (
        <NavLinkStyled
            onClick={toggleDrawer}
            initial={{ opacity: 0, x: -50 }}
            animate={{
                opacity: 1,
                x: 0,
                transition: {
                    delay: 0.25 + order * 0.1,
                    duration: 0.2,
                    ease: [0.65, 0.05, 0.36, 1],
                },
            }}
            exit={{
                opacity: 0,
                x: -50,
                transition: {
                    delay: 0.1 + order * 0.1,
                    duration: 0.2,
                    ease: [0.65, 0.05, 0.36, 1],
                },
            }}
        >
            <Link href={href} passHref>
                <a className="header-4">{label}</a>
            </Link>
        </NavLinkStyled>
    );
}
