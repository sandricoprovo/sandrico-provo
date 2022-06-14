import { ReactNode, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import { Reset } from '../../styles/Reset';
import { Fonts } from '../../styles/Fonts';
import { GlobalStyle } from '../../styles/GlobalStyles';
import { PageProps } from '../../types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { LayoutContainer } from './styles';

interface LayoutProps {
    children: ReactNode;
    pageProps: PageProps;
}

function Layout({ children, pageProps }: LayoutProps) {
    // TODO: import theme change hook here and pass to header

    useEffect(() => {
        // Adds layout theme class to body on load.
        document.querySelector('body').classList.add('theme--light');
    }, []);

    return (
        <>
            <Fonts />
            <GlobalStyle />
            <Reset />
            <AnimatePresence>
                <LayoutContainer>
                    <Header header={pageProps.header} />
                    {children}
                    <Footer />
                </LayoutContainer>
            </AnimatePresence>
        </>
    );
}

export default Layout;
