import styled from 'styled-components';
import { useEffect } from 'react';

import { Header } from './Header/Header';
import { Page } from './Page';
import { Footer } from './Footer/Footer';

const LayoutStyled = styled.div`
    display: grid;
    grid-template-columns: 92vw;
    grid-template-rows: auto 1fr auto;
    justify-content: space-around;
    justify-items: center;
    align-items: center;
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
