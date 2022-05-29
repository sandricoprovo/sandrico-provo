import 'dotenv/config';
import { config, ListSchemaConfig } from '@keystone-6/core';

import { schema } from './schema';

export default config({
    db: {
        provider: 'postgresql',
        url: process.env.DB_CONNECTION_STRING,
    },
    lists: schema as ListSchemaConfig,
    images: {
        upload: 'cloud',
        local: {
            storagePath: './client/public/images',
            baseUrl: '/images',
        },
    },
});
