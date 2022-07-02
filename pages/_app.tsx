import type { AppProps } from 'next/app';

import Layout from '../src/components/Layout/Layout';
import '../src/styles/Fonts.css';

function App({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default App;
