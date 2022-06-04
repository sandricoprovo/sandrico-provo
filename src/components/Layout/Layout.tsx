import { Reset } from '../../styles/Reset';
import { Fonts } from '../../styles/Fonts';
import { GlobalStyle } from '../../styles/GlobalStyles';
import Header from '../Header/Header';

import { LayoutContainer } from './styles';

function Layout({ children }) {
    // TODO: import theme change hook here and pass to header

    return (
        <>
            <Reset />
            <Fonts />
            <GlobalStyle />
            <LayoutContainer className="theme--light">
                <Header />
                {children}
            </LayoutContainer>
        </>
    );
}

export default Layout;
