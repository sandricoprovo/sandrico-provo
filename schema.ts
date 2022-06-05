import { list } from '@keystone-6/core';
import {
    file,
    text,
    relationship,
    image,
    select,
    timestamp,
    password,
    checkbox,
} from '@keystone-6/core/fields';
import { document } from '@keystone-6/fields-document';

const Admin = list({
    fields: {
        name: text({ validation: { isRequired: true } }),
        email: text({ isIndexed: 'unique', validation: { isRequired: true } }),
        password: password(),
        isAdmin: checkbox(),
    },
});

export const schema = {
    Admin,
    User: list({
        description: 'A user/author of content.',
        fields: {
            name: text({ validation: { isRequired: true } }),
            title: text({ validation: { isRequired: true } }),
            resume: relationship({ ref: 'File', many: false, label: 'Resume' }),
            links: relationship({
                ref: 'ExternalLink',
                many: true,
                label: 'Links',
            }),
        },
    }),
    File: list({
        description: 'An uploaded file such as a PDF.',
        fields: {
            name: text({ validation: { isRequired: true } }),
            file: file({ label: 'File' }),
        },
    }),
    ExternalLink: list({
        description: 'A link to target an external location.',
        fields: {
            name: text({ validation: { isRequired: true } }),
            platform: select({
                label: 'Platform',
                type: 'string',
                options: [
                    { label: 'Twitter', value: 'twitter' },
                    { label: 'GitHub', value: 'gitHub' },
                    { label: 'LinkedIn', value: 'linkedIn' },
                    { label: 'YouTube', value: 'youtube' },
                    { label: 'Live', value: 'live' },
                ],
            }),
            link: text({ validation: { isRequired: true } }),
        },
    }),
    Project: list({
        description: 'A project completed by a user.',
        fields: {
            name: text({ validation: { isRequired: true } }),
            content: document({
                formatting: true,
                links: true,
            }),
            creator: relationship({
                ref: 'User',
                many: true,
                label: 'Creator(s)',
            }),
            techStack: text({ validation: { isRequired: true } }),
            image: image({ label: 'Image' }),
            links: relationship({
                ref: 'ExternalLink',
                many: true,
                label: 'Links',
            }),
        },
    }),
    Post: list({
        description: 'A piece of content created by a user.',
        fields: {
            title: text({ validation: { isRequired: true } }),
            status: select({
                type: 'enum',
                options: [
                    { label: 'Draft', value: 'draft' },
                    { label: 'Published', value: 'published' },
                ],
            }),
            content: document({ formatting: true, links: true }),
            publishDate: timestamp(),
            creator: relationship({ ref: 'User', many: false }),
            link: relationship({
                ref: 'ExternalLink',
                many: true,
                label: 'Links',
            }),
        },
    }),
    Content: list({
        description:
            'A block of text created with the purpose of being associated with a section.',
        fields: {
            name: text({ validation: { isRequired: true } }),
            subHeader: text(),
            text: document({
                formatting: true,
                links: true,
            }),
        },
    }),
    Section: list({
        description: 'A collection of related content/information.',
        fields: {
            name: text({ validation: { isRequired: true } }),
            page: text({ validation: { isRequired: true } }),
            header: text({ validation: { isRequired: true } }),
            subHeader: text(),
            content: relationship({ ref: 'Content', many: true }),
            files: relationship({ ref: 'File', many: true, label: 'Files' }),
            cta: text({ label: 'CTA' }),
        },
    }),
    NavigationLink: list({
        description: 'A label for a navigation link.',
        fields: {
            label: text({ validation: { isRequired: true } }),
        },
    }),
    Header: list({
        description:
            'A header is a collection of navigation links and logo(s).',
        fields: {
            logo: text({ validation: { isRequired: true } }),
            label: text({ validation: { isRequired: true } }),
            links: relationship({ ref: 'NavigationLink', many: true }),
        },
    }),
};
