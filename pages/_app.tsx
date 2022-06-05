import type { AppProps } from 'next/app';

import { PageProps } from '../src/types';
import Layout from '../src/components/Layout/Layout';

function App({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <Layout pageProps={pageProps as PageProps}>
            <Component {...pageProps} />
        </Layout>
    );
}

export default App;
