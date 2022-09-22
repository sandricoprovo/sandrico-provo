import styled from 'styled-components';
import { useEffect } from 'react';

import { Header } from './Header/Header';
import { Page } from './Page';
import { Footer } from './Footer/Footer';

const LayoutStyled = styled.div`
    border: 2px solid red;

    display: grid;
    grid-template-columns: 100vw;
    grid-template-rows: 10vh 1fr auto;
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
