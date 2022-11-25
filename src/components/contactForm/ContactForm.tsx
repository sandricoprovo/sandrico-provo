import React from 'react';
import styled from 'styled-components';

import { BodyText, SubHeader } from '../shared/typography';
import { Socials } from '../Socials';

import { Form } from './Form';

const FormContainer = styled.section`
    width: 100%;
    margin-block-end: var(--spg-section);

    display: flex;
    flex-direction: column;
    gap: 48px;

    & > div:first-child {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
`;

export function ContactForm() {
    return (
        <FormContainer id="contact_form">
            <div>
                <SubHeader>Get In Touch</SubHeader>
                <BodyText>
                    Thanks for reaching out! Below is a form you can use to
                    contact me. If you prefer social media, you can also use the
                    links below to find me. Looking forward to connecting with
                    you!
                </BodyText>
                <Socials />
            </div>
            <Form />
        </FormContainer>
    );
}
