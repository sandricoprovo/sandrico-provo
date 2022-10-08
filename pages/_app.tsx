import type { AppProps } from 'next/app';

import '../src/styles/FontFace.css';
import { GlobalStyles } from '../src/styles/GlobalStyles';
import { Layout } from '../src/components/Layout';
import { AnimatePresence } from 'framer-motion';
import { Transition } from '../src/components/PageTransition/Transition';

function App({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <GlobalStyles />
            <AnimatePresence mode="wait">
                <Transition>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </Transition>
            </AnimatePresence>
        </>
    );
}

export default App;
