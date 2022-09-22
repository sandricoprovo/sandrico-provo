import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { Navigation } from './Navigation/Navigation';

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
                    <Image
                        src="/assets/logos/Logo-64-Black.svg"
                        height={48}
                        width={48}
                    />
                </a>
            </Link>
            <Navigation />
        </HeaderStyled>
    );
}
