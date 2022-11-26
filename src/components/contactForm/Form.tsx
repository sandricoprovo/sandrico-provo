import React, { FormEvent } from 'react';
import styled from 'styled-components';

import { useForm } from '../../hooks/useForm';
import { ContactForm } from '../../types/contact';
import { BodyText } from '../shared/typography';
import { ClearBtn, SubmitBtn } from '../shared/buttons';

import { Label } from './Label';
import { Input } from './Input';
import { TextArea } from './TextArea';
import { ControlError } from './ControlError';

const FormStyled = styled.form`
    --spg-gap: 16px;
    width: 100%;
    max-width: 800px;

    display: flex;
    flex-direction: column;
    gap: var(--spg-gap);

    & > fieldset {
        display: flex;
        flex-direction: column;
        gap: var(--spg-gap);
    }

    & > div:last-child {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--spg-gap);

        & > button {
            min-height: 42px;
            flex: 1;
        }

        & > button:first-child {
            flex-basis: 80%;
        }
    }
`;

export function Form() {
    const {
        fields,
        errors,
        disableSubmit,
        submitStatus,
        submitInProgress,
        handleChange,
        resetForm,
        submitForm,
        updateSubmitStatus,
        toggleSubmitProgressStatus,
    } = useForm<ContactForm>({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        try {
            // Initiates in progress state
            toggleSubmitProgressStatus(true);

            // Sends email via provider
            const emailResponse = await fetch('/api/email', {
                method: 'POST',
                body: JSON.stringify(fields),
            });

            if (emailResponse.ok) {
                updateSubmitStatus(true);
            } else {
                updateSubmitStatus(false);
            }

            // Ends in progress state
            toggleSubmitProgressStatus(false);

            // Resets the form on submit
            setTimeout(() => resetForm(), 3000);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <FormStyled
            method="POST"
            onSubmit={(event) => submitForm(event, handleFormSubmit)}
        >
            <fieldset>
                <Label fieldName="name">
                    <BodyText>Name</BodyText>
                    <Input
                        fieldName="name"
                        fieldValue={fields.name}
                        changeHandler={handleChange}
                    />
                    <ControlError>{errors.name}</ControlError>
                </Label>
                <Label fieldName="email">
                    <BodyText>Email</BodyText>
                    <Input
                        fieldName="email"
                        fieldValue={fields.email}
                        changeHandler={handleChange}
                        type="email"
                    />
                    <ControlError>{errors.email}</ControlError>
                </Label>
                <Label fieldName="subject">
                    <BodyText>Subject</BodyText>
                    <Input
                        fieldName="subject"
                        fieldValue={fields.subject}
                        changeHandler={handleChange}
                    />
                    <ControlError>{errors.subject}</ControlError>
                </Label>
                <Label fieldName="message">
                    <BodyText>Message</BodyText>
                    <TextArea
                        fieldName="message"
                        fieldValue={fields.message}
                        changeHandler={handleChange}
                    />
                    <ControlError>{errors.message}</ControlError>
                </Label>
            </fieldset>
            <div>
                <SubmitBtn
                    type="submit"
                    isDisabled={disableSubmit}
                    status={submitStatus}
                    submitInProgress={submitInProgress}
                >
                    Submit
                </SubmitBtn>
                <ClearBtn clickHandler={resetForm}>Clear</ClearBtn>
            </div>
        </FormStyled>
    );
}
