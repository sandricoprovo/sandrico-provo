import { RouterContext } from 'next/dist/shared/lib/router-context';
import { NextRouter } from 'next/router';

import { Layout } from '../../src/components/containers/Layout';
import HomePage from '../../pages/index';

// MOCK router from Next useRouter
const createRouter = () => ({
    pathname: '/',
    route: '/',
    query: {},
    asPath: '/',
    components: {},
    isFallback: false,
    basePath: '',
    events: {
        emit: cy.spy().as('emit'),
        off: cy.spy().as('off'),
        on: cy.spy().as('on'),
    },
    push: cy.spy().as('push'),
    replace: cy.spy().as('replace'),
    reload: cy.spy().as('reload'),
    back: cy.spy().as('back'),
    prefetch: cy.stub().as('prefetch').resolves(),
    beforePopState: cy.spy().as('beforePopState'),
    isLocaleDomain: true,
});

describe('ContactFormLink.cy.tsx', () => {
    // Loads the HomePage inside of a mock router.
    let router = {} as unknown as NextRouter;
    beforeEach(() => {
        // Loads the HomePage inside of a mock router.
        router = createRouter() as unknown as NextRouter;
        cy.mount(
            <RouterContext.Provider value={router}>
                <Layout>
                    <HomePage />
                </Layout>
            </RouterContext.Provider>
        );
    });

    it('First CF button scrolls to contact form on click', () => {
        cy.get('[data-test-id="hero-contact-btn"]')
            .click()
            .then(() => {
                cy.contains('Get In Touch');
            });
    });

    it('Second CF link scrolls to contact form on click', () => {
        cy.get('[data-test-id="footer-contact-btn"]')
            .click()
            .then(() => {
                cy.contains('Get In Touch');
            });
    });
});
