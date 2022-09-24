import Link from 'next/link';
import styled from 'styled-components';

import { NavBar } from './NavBar/NavBar';
import { NavDrawer } from './NavDrawer/NavDrawer';
import { LogoBlack } from '../Logos';
import { useWindowSize } from '../../hooks/useWindowSize';

const HeaderStyled = styled.header`
    padding: var(--spacing-vertical) var(--spacing-content-mobile);
    position: relative;

    display: flex;
    justify-content: space-between;
    align-items: center;

    & > nav,
    & > svg {
        opacity: 0;

        animation-name: fadeIn;
        animation-duration: 0.3s;
        animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
        animation-delay: 0.5s;
        animation-fill-mode: forwards;

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(8px);
            }
            to {
                opacity: 1;
                transform: translateY(0px);
            }
        }
    }

    @media (min-width: 575px) {
        padding: var(--spacing-vertical) var(--spacing-content);
    }
`;

export function Header() {
    const { width } = useWindowSize();

    return (
        <HeaderStyled>
            <Link href="/">
                <a>
                    <LogoBlack />
                </a>
            </Link>
            {width && width <= 575 ? <NavDrawer /> : <NavBar />}
        </HeaderStyled>
    );
}
