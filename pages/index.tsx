import React from 'react';
import { GetStaticProps } from 'next';

import { apolloClient } from '../src/graphql/apolloClient';
import { GET_HEADER } from '../src/graphql/queries/GET_HEADERS';
import { Payload, Header } from '../src/types';

export const getStaticProps: GetStaticProps = async () => {
    const { data }: Payload<'headers', Header[]> = await apolloClient.query({
        query: GET_HEADER,
        variables: { header: 'Header' },
    });

    if (data.headers.length === 1) {
        return {
            props: {
                header: data.headers[0] ?? null,
            },
        };
    }

    return {
        props: {
            headers: data.headers ?? null,
        },
    };
};

function HomePage() {
    return <main>Hello World</main>;
}

export default HomePage;
