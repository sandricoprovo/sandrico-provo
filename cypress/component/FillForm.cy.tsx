import { RouterContext } from 'next/dist/shared/lib/router-context';
import { NextRouter } from 'next/router';

import { Layout } from '../../src/components/containers/Layout';
import HomePage from '../../pages/index';
import { ContactForm } from '../../src/types/contact';

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

// MOCK FORM USER
const mockContent: ContactForm = {
    name: 'John Appleseed',
    email: 'japplseed@example.com',
    subject: 'Cypress Form Test',
    message: 'Testing the contact form in cypress.',
};

describe('Form.cy.tsx', () => {
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

    // Fills form inputs with mock content.
    function fillFormInput() {
        cy.get('[data-test-id="cfi-name"]').type(mockContent.name);
        cy.get('[data-test-id="cfi-email"]').type(mockContent.email);
        cy.get('[data-test-id="cfi-subject"]').type(mockContent.subject);
        cy.get('[data-test-id="cfi-message"]').type(mockContent.message);
    }

    function getSubmitBtn() {
        return cy.get('[data-test-id=CFSB]');
    }

    it('Submit button is disabled until form is filled', () => {
        // Scrolls contact form into view so the intersection observer fires.
        cy.get('[data-test-id="hero-contact-btn"]').click();

        // Checks that submit button is disabled.
        getSubmitBtn().should('be.disabled');

        // Fills inputs.
        fillFormInput();

        // Checks that submit button is now enabled.
        getSubmitBtn().should('be.not.disabled');

        // Clears the form.
        cy.get('[data-test-id=CFCB]').click();
    });
});
