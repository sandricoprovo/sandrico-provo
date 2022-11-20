import type { AppProps } from 'next/app';

import '../src/styles/fontface.css';
import { GlobalStyles } from '../src/styles/global';
import { Layout } from '../src/components/containers/Layout';

function App({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <GlobalStyles />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default App;
