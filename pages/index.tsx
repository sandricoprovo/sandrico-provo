import React from 'react';
import { GetServerSideProps } from 'next';

import { apolloClient } from '../src/graphql/apolloClient';
import { GET_NAV_BAR } from '../src/graphql/queries/GET_NAV_BARS';
import { Payload, Header } from '../src/types';

export const getServerSideProps: GetServerSideProps = async () => {
    const { data }: Payload<'navBars', Header[]> = await apolloClient.query({
        query: GET_NAV_BAR,
        variables: { header: 'Header' },
    });

    if (data.navBars.length === 1) {
        return {
            props: {
                header: data.navBars[0] ?? null,
            },
        };
    }

    return {
        props: {
            headers: data.navBars ?? null,
        },
    };
};

function HomePage() {
    return <main>Hello World</main>;
}

export default HomePage;
