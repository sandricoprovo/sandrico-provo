import Link from 'next/link';
import { useState, useEffect } from 'react';

import header from '../../content/header';

import { HeaderContainer, LogoText } from './styles';
import NavBar from './Navigation/NavBar';
import MobileNav from './Navigation/MobileNav';

export default function Header() {
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

    return (
        <HeaderContainer>
            <Link href="/">
                <LogoText
                    open={isNavOpen}
                    initial={{ opacity: 0, y: '50%' }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.7,
                        delay: 0.05,
                        ease: [0.68, -0.55, 0.27, 1.55],
                    }}
                >
                    {header.logo}
                </LogoText>
            </Link>
            <NavBar
                showMobileNav={isMobile}
                isNavOpen={isNavOpen}
                toggleMobileNav={toggleNavMenu}
                links={header.links}
            />
            <MobileNav
                isMobile={isMobile}
                isNavOpen={isNavOpen}
                links={header.links}
                toggleMobileNav={toggleNavMenu}
            />
        </HeaderContainer>
    );
}
