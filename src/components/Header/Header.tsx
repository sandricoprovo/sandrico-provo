import Link from 'next/link';
import styled from 'styled-components';

import { Navigation } from './Navigation/Navigation';
import { LogoBlack } from '../Logos';
import { useWindowSize } from '../../hooks/useWindowSize';

const HeaderStyled = styled.header`
    padding: var(--spacing-vertical) var(--spacing-content-mobile);
    opacity: 0;
    animation-name: fadeUpAndIn;
    animation-duration: 0.3s;
    animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
    animation-fill-mode: forwards;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @keyframes fadeUpAndIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0px);
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
            {width && width <= 575 ? <h1>Mobile Nav</h1> : <Navigation />}
        </HeaderStyled>
    );
}
