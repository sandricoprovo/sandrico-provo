import Link from 'next/link';
import styled from 'styled-components';

import { Navigation } from './Navigation/Navigation';
import { LogoBlack } from '../Logos';

const HeaderStyled = styled.header`
    padding: 0 var(--spacing-content);

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export function Header() {
    return (
        <HeaderStyled>
            <Link href="/">
                <a>
                    <LogoBlack />
                </a>
            </Link>
            <Navigation />
        </HeaderStyled>
    );
}
