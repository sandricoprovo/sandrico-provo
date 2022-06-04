import Link from 'next/link';

import { HeaderContainer, LogoText } from './styles';
import NavBar from './Navigation/NavBar';

export default function Header() {
    return (
        <HeaderContainer>
            <Link href="/">
                <LogoText>san.</LogoText>
            </Link>
            <NavBar />
        </HeaderContainer>
    );
}
