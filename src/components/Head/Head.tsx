import HeadTag from 'next/head';
import { useRouter } from 'next/router';

import { Favicon } from './Favicon';

interface HeadProps {
    title: string;
}

export function Head({ title }: HeadProps) {
    const router = useRouter();
    const pageUrl = `https://sandricoprovo.dev${router.pathname}`;

    return (
        <HeadTag>
            {/* <!-- Primary Meta Tags --> */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta
                name="description"
                content="I'm a software developer from Canada. Using my front-end and back-end skills I solve problems and bring benefits to users."
            />
            <Favicon />

            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:title" content={title} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={pageUrl} />
            <meta
                property="og:image"
                content="https://sandricoprovo.dev/public/images/seo/opengraphyimage.jpg"
            />
            <meta
                property="og:image:alt"
                content="A left-aligned white logo in front of a blue background opposite a right aligned name, image, and url."
            />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:locale" content="en_CA" />
            <meta
                property="og:description"
                content="I'm a software developer from Canada. I build fun and data-driven experiences for the web using my front-end and back-end skills."
            />

            {/* <!-- Twitter --> */}
            <meta property="twitter:title" content={title} />
            <meta property="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="@sandricoprovo" />
            <meta name="twitter:site" content="@sandricoprovo" />
            <meta property="twitter:type" content="website" />
            <meta property="twitter:url" content={pageUrl} />
            <meta
                property="twitter:image"
                content="https://sandricoprovo.dev/public/images/seo/opengraphyimage.jpg"
            />
            <meta
                property="twitter:image:alt"
                content="A left-aligned white logo in front of a blue background opposite a right aligned name, image, and url."
            />
            <meta
                property="twitter:description"
                content="I'm a software developer from Canada. I build fun and data-driven experiences for the web using my front-end and back-end skills."
            />
        </HeadTag>
    );
}
