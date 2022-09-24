import React, { useState } from 'react';
import styled from 'styled-components';

import { NAV_LINKS } from '../../../content/navLinks';
import { NavDrawerLink } from './NavDrawerLink';
import { NavDrawerFooter } from './NavDrawerFooter';

const Drawer = styled.nav`
    border: 2px solid green;
    position: absolute;
    padding: 0 var(--spacing-content-mobile);
    background-color: var(--clr-background);
    height: 100vh;
    width: 100vw;
    top: 100px;
    right: 0;
    padding-top: 3rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > div > li {
        margin: 0.75rem 0;
    }

    & > div:nth-child(2) {
        margin-bottom: 2rem;
    }

    & > div > li:active > a {
        color: red;
    }

    @supports (-webkit-touch-callout: none) {
        /* The hack for Safari */
        height: fill-available;
        height: -webkit-fill-available;
    }
`;

export function NavDrawer() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleDrawer() {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <button type="button" onClick={toggleDrawer}>
                Menu
            </button>
            {isOpen ? (
                <Drawer>
                    <div>
                        {NAV_LINKS.map((link) => (
                            <NavDrawerLink
                                key={link.label}
                                href={link.href}
                                label={link.label}
                                toggleDrawer={toggleDrawer}
                            />
                        ))}
                    </div>
                    <NavDrawerFooter />
                </Drawer>
            ) : null}
        </>
    );
}
