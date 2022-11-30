import type { AppProps } from 'next/app';

import '../src/styles/reset.css';
import '../src/styles/fontface.css';
import '../src/styles/global.css';

import { Layout } from '../src/components/containers/Layout';

function App({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default App;
