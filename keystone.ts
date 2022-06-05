import 'dotenv/config';
import { config, ListSchemaConfig } from '@keystone-6/core';
import { statelessSessions } from '@keystone-6/core/session';
import { createAuth } from '@keystone-6/auth';

import { schema } from './schema';

const { withAuth } = createAuth({
    listKey: 'Admin',
    identityField: 'email',
    secretField: 'password',
});

const session = statelessSessions({
    secret: process.env.KEYSTONE_SESSION_SECRET,
});

// Update config to support file uploads https://keystonejs.com/docs/apis/config#storage
export default withAuth(
    config({
        db: {
            provider: 'postgresql',
            url: process.env.DB_CONNECTION_STRING,
        },
        lists: schema as ListSchemaConfig,
        session,
        images: {
            upload: 'cloud',
            local: {
                storagePath: './client/public/images',
                baseUrl: '/images',
            },
        },
    })
);
