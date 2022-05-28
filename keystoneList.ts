import { list } from '@keystone-6/core';
import { file, text, relationship } from '@keystone-6/core/fields';
import { document } from '@keystone-6/fields-document';

// TODOS:
// - Add project list
// - Add blog/video post list
// - Add form field creator

export const lists = {
    Content: list({
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
        fields: {
            name: text({ validation: { isRequired: true } }),
            page: text({ validation: { isRequired: true } }),
            header: text({ validation: { isRequired: true } }),
            subHeader: text(),
            content: relationship({ ref: 'Content', many: true }),
            file: file({ label: 'PDF' }),
            cta: text({ label: 'CTA' }),
        },
    }),
    NavLink: list({
        fields: {
            label: text({ validation: { isRequired: true } }),
        },
    }),
    NavBar: list({
        fields: {
            logo: text({ validation: { isRequired: true } }),
            label: text({ validation: { isRequired: true } }),
            links: relationship({ ref: 'NavLink', many: true }),
        },
    }),
};
