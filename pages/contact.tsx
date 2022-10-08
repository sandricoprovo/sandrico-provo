import React from 'react';
import styled from 'styled-components';
import { ContactForm, ContactMethods } from '../src/components/Contact';

import { Head } from '../src/components/Head/Head';
import { HeroContainer } from '../src/components/Hero/HeroContainer';
import { HeroHeader } from '../src/components/Hero/HeroHeader';

const IntroComments = styled.section`
    width: 100%;
    min-width: 280px;
    padding: 0 var(--spacing-content-mobile);
    margin-bottom: calc(var(--spacing-margin) * 0.24);

    & > div {
        margin-bottom: 40px;

        & > span {
            font-size: var(--font-base);
            font-family: var(--font-display);
            color: var(--clr-main);
        }

        & > h2:nth-of-type(1) {
            font-family: var(--font-header);
            font-size: var(--font-xl);
            line-height: 120%;
        }

        & > p {
            font-family: var(--font-base);
            font-size: var(--font-md);
        }
    }
`;

const Contacts = styled.div`
    margin-bottom: var(--spacing-margin);

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 80px;

    & > form {
        flex-grow: 1;
    }

    & > div {
        flex-grow: 1;
    }

    padding: 0 var(--spacing-content-mobile);
`;

function Contact() {
    return (
        <>
            <Head title="Sandrico Provo - Contact" />
            <HeroContainer>
                <HeroHeader content="Contact" />
            </HeroContainer>
            <IntroComments>
                <div>
                    <span>Collabs</span>
                    <h2>Lets Work Together.</h2>
                </div>
                <p>
                    I'd love to get in touch and chat with you. Use the form or
                    social links below to say hello.
                </p>
            </IntroComments>
            <Contacts>
                <ContactForm />
                <ContactMethods />
            </Contacts>
        </>
    );
}

export default Contact;
