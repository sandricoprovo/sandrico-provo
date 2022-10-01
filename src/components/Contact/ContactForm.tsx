import React from 'react';
import styled from 'styled-components';
import { SubmitBtn } from '../Buttons';

const FormContainer = styled.form`
    & > fieldset {
        max-width: 600px;
        margin-bottom: 40px;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 40px;

        & > label,
        & > label > input,
        & > label > textarea {
            font-family: var(--font-base);
        }

        & > label {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 8px;
        }

        & > label > input,
        & > label > textarea {
            padding: 16px;
        }

        & > label:not(label:last-child) {
            flex-grow: 1;
        }

        & > label:last-child {
            flex-basis: 100%;

            & > textarea {
                width: 100%;
                min-height: 200px;
                line-height: 180%;
            }
        }
    }
`;

export function ContactForm() {
    return (
        <FormContainer>
            <fieldset>
                <label htmlFor="name">
                    Name
                    <input type="text" name="name" placeholder="John Smith" />
                </label>
                <label htmlFor="email">
                    Email
                    <input
                        type="text"
                        name="email"
                        placeholder="jsmith@email.ca"
                    />
                </label>
                <label htmlFor="subject">
                    Subject
                    <input
                        type="text"
                        name="subject"
                        placeholder="Software Development, Websites..."
                    />
                </label>
                <label htmlFor="message">
                    Message
                    <textarea
                        name="message"
                        placeholder="I'd love to talk to you about..."
                    />
                </label>
            </fieldset>
            <SubmitBtn label="Submit" />
        </FormContainer>
    );
}
