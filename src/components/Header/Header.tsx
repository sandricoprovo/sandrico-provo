import Link from 'next/link';

import defaultHeader from '../../mock/mockHeader';
import { Header as HeaderType } from '../../types/Header';

import { HeaderContainer, LogoText } from './styles';
import NavBar from './Navigation/NavBar';

interface HeaderProps {
    header: HeaderType;
}

export default function Header({ header }: HeaderProps) {
    return (
        <HeaderContainer>
            <Link href="/">
                <LogoText>{header?.logo || defaultHeader.logo}</LogoText>
            </Link>
            <NavBar links={header?.links || defaultHeader.links} />
        </HeaderContainer>
    );
}
