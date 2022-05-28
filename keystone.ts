import 'dotenv/config';
import { config } from '@keystone-6/core';

import { lists } from './keystoneList';

export default config({
    db: {
        provider: 'postgresql',
        url: process.env.DB_CONNECTION_STRING,
    },
    lists,
});
