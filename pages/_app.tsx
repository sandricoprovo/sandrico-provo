import type { AppProps } from 'next/app';

import '../src/styles/FontFace.css';
import { GlobalStyles } from '../src/styles/GlobalStyles';
import { Layout } from '../src/components/Layout';

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
