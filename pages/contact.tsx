import React from 'react';
import styled from 'styled-components';
import { ContactForm, ContactMethods } from '../src/components/Contact';

import { Head } from '../src/components/Head/Head';
import { Hero } from '../src/components/Hero';

const IntroComments = styled.section`
    width: 70%;
    min-width: 350px;
    padding: 0 var(--spacing-content-mobile);
    margin-bottom: calc(var(--spacing-margin) / 2);

    & > div {
        margin-bottom: 40px;

        & > small {
            font-family: var(--font-display);
            font-size: var(--font-base);

            & > span {
                color: var(--clr-main);
            }
        }

        & > p:nth-of-type(1) {
            font-family: var(--font-header);
            font-size: var(--font-xl);
            line-height: 120%;
        }

        & > p:nth-of-type(2) {
            font-family: var(--font-base);
            font-size: var(--font-md);
        }
    }

    @media (min-width: 575px) {
        padding: 0 var(--spacing-content);
    }
`;

const Contacts = styled.div`
    padding: 0 var(--spacing-content-mobile);
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

    @media (min-width: 575px) {
        padding: 0 var(--spacing-content);
    }
`;

function Contact() {
    return (
        <>
            <Head title="Sandrico Provo - Contact" />
            <Hero
                header={{
                    lineOne: 'Get',
                    lineTwo: 'In',
                    lineThree: 'Touch',
                }}
            />
            <IntroComments>
                <div>
                    <small>
                        It all <span>starts</span> below,
                    </small>
                    <p>Lets Work Together.</p>
                </div>
                <p>
                    Mi eget mauris pharetra et ultrices neque ornare. Nisl nunc
                    mi ipsum faucibus vitae aliquet. Massa id neque aliquam
                    vestibulum morbi blandit cursus risus at.
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
