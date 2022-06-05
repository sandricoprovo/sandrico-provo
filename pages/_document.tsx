import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
    DocumentInitialProps,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet();
        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps,
            styles: [
                <>
                    {initialProps.styles}
                    {sheet.getStyleElement()}
                </>,
            ],
        };
    }

    render(): JSX.Element {
        return (
            <Html lang="en-CA">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
