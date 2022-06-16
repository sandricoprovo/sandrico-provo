import { ReactNode } from 'react';

import { GlobalStyles } from '../../styles/GlobalStyles';
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

    return (
        <>
            <GlobalStyles />
            <LayoutContainer className="theme--light">
                <Header header={pageProps.header} />
                {children}
                <Footer />
            </LayoutContainer>
        </>
    );
}

export default Layout;
