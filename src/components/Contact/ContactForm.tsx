import React, { FormEvent } from 'react';
import styled from 'styled-components';
import { SubmitBtn, DangerBtn } from '../Buttons';
import { ContactForm as IContactForm } from '../../types/ContactForm';
import { useForm } from '../../hooks/useForm';

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
            border: 1px solid var(--clr-text);
            border-radius: var(--border-radius);
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

    & > div {
        display: flex;
        align-items: center;
        gap: 24px;
    }
`;

export function ContactForm() {
    const { fields, errors, handleChange, resetForm, submitForm } =
        useForm<IContactForm>({
            name: '',
            email: '',
            subject: '',
            message: '',
        });

    function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        // Sends email via provider
        fetch('/api/email', {
            method: 'POST',
            body: JSON.stringify(fields),
        });
        // Resets the form on submit
        resetForm();
    }

    console.log(errors);

    return (
        <FormContainer
            method="POST"
            onSubmit={(event) => submitForm(event, handleFormSubmit)}
        >
            <fieldset>
                <label htmlFor="name">
                    Name
                    <input
                        type="text"
                        name="name"
                        placeholder="John Smith"
                        onChange={handleChange}
                        value={fields.name}
                        required
                    />
                    {errors?.name && <span>{errors.name}</span>}
                </label>
                <label htmlFor="email">
                    Email
                    <input
                        type="email"
                        name="email"
                        placeholder="jsmith@email.ca"
                        onChange={handleChange}
                        value={fields.email}
                        required
                    />
                    {errors?.email && <span>{errors.email}</span>}
                </label>
                <label htmlFor="subject">
                    Subject
                    <input
                        type="text"
                        name="subject"
                        placeholder="Software Development, Websites..."
                        onChange={handleChange}
                        value={fields.subject}
                        required
                    />
                    {errors?.subject && <span>{errors.subject}</span>}
                </label>
                <label htmlFor="message">
                    Message
                    <textarea
                        name="message"
                        placeholder="I'd love to talk to you about..."
                        onChange={handleChange}
                        value={fields.message}
                        required
                    />
                    {errors?.message && <span>{errors.message}</span>}
                </label>
            </fieldset>
            <div>
                <SubmitBtn label="Submit" />
                <DangerBtn label="Clear" clickHandler={resetForm} />
            </div>
        </FormContainer>
    );
}
