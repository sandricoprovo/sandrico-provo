import type { AppProps } from 'next/app';

import { GlobalStyles } from '../src/styles/GlobalStyles';

function App({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    );
}

export default App;
