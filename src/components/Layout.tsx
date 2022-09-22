import styled from 'styled-components';
import { useEffect } from 'react';

import { Header } from './Header/Header';
import { Page } from './Page';
import { Footer } from './Footer/Footer';

const LayoutStyled = styled.div`
    display: grid;
    grid-template-columns: 100vw;
    grid-template-rows: 1fr 1fr auto;
`;

export function Layout({ children }: any) {
    useEffect(() => {
        document.querySelector('body')?.classList.add('theme-default');
    }, []);

    return (
        <LayoutStyled>
            <Header />
            <Page>{children}</Page>
            <Footer />
        </LayoutStyled>
    );
}
