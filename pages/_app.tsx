import type { AppProps } from 'next/app';

import { GlobalStyles } from '../src/styles/GlobalStyles';
import '../src/styles/FontFace.css';

function App({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    );
}

export default App;
