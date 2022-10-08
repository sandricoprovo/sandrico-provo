import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentInitialProps,
    DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    // --------------For styled-components only------------//
    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    // ---------------------------------------------------//
    render() {
        return (
            <Html lang="en" className="theme-default">
                <Head>
                    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                    <link
                        rel="preload"
                        href="/fonts/Montserrat-Black.woff"
                        as="font"
                        type="font/woff"
                        crossOrigin=""
                    />
                    <link
                        rel="preload"
                        href="/fonts/Montserrat-Black.woff2"
                        as="font"
                        type="font/woff2"
                        crossOrigin=""
                    />
                    <link
                        rel="preload"
                        href="/fonts/Montserrat-Regular.woff"
                        as="font"
                        type="font/woff"
                        crossOrigin=""
                    />
                    <link
                        rel="preload"
                        href="/fonts/Montserrat-Regular.woff2"
                        as="font"
                        type="font/woff2"
                        crossOrigin=""
                    />
                    <link
                        rel="preload"
                        href="/fonts/PermanentMarker-Regular.woff"
                        as="font"
                        type="font/woff"
                        crossOrigin=""
                    />
                    <link
                        rel="preload"
                        href="/fonts/PermanentMarker-Regular.woff2"
                        as="font"
                        type="font/woff2"
                        crossOrigin=""
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
