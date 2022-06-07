import { ReactNode } from 'react';
import { AnimatePresence } from 'framer-motion';

import { Reset } from '../../styles/Reset';
import { Fonts } from '../../styles/Fonts';
import { GlobalStyle } from '../../styles/GlobalStyles';
import Header from '../Header/Header';
import { PageProps } from '../../types';

import { LayoutContainer } from './styles';

interface LayoutProps {
    children: ReactNode;
    pageProps: PageProps;
}

function Layout({ children, pageProps }: LayoutProps) {
    // TODO: import theme change hook here and pass to header

    return (
        <>
            <Reset />
            <Fonts />
            <GlobalStyle />
            <AnimatePresence>
                <LayoutContainer className="theme--light">
                    <Header header={pageProps.header} />
                    {children}
                </LayoutContainer>
            </AnimatePresence>
        </>
    );
}

export default Layout;
