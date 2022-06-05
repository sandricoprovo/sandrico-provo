import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: createHttpLink({
        uri:
            process.env.NODE_ENV !== 'production'
                ? process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT
                : process.env.GRAPHQL_API_ENDPOINT,
        credentials: 'same-origin',
    }),
    defaultOptions: {
        watchQuery: {
            pollInterval: 604800,
        },
    },
    cache: new InMemoryCache(),
});
