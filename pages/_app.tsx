import type { AppProps } from 'next/app';

import Fonts from '../src/styles/Fonts';
import GlobalStyle from '../src/styles/GlobalStyles';
import Header from '../src/components/Header/Header';
import Layout from '../src/components/Layout/Layout';

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Fonts />
            <GlobalStyle />
            <Header />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default App;
