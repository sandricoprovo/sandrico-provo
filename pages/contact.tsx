import { FormEvent } from 'react';

import Page from '../src/components/Page';
import { useForm } from '../src/hooks/useForm';
import {
    HeroContainer,
    HeroTitle,
    HeroSubTitle,
    HeroDescription,
    FormContainer,
    FormHeader,
    ContactForm,
    FormLabel,
    FormInput,
    FormTextArea,
} from '../src/components/ContactPage/styles';
import WavyText from '../src/components/WaveFadeInText';
import TimezoneClock from '../src/components/TimeZone';
import { SubmitBtn } from '../src/components/Buttons/Buttons';
import { ContactForm as ContactFormType } from '../src/types/ContactForm';
import { ClearAllIcon } from '../src/components/Icons';

function ContactPage() {
    const { fields, handleChange, resetForm, submitForm } =
        useForm<ContactFormType>({
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

    return (
        <Page gap={5}>
            <HeroContainer>
                <HeroTitle>
                    <WavyText
                        text="Contact"
                        delay={0.21}
                        duration={0.18}
                        replay
                    />
                </HeroTitle>
                <HeroDescription>
                    <HeroSubTitle>Date & Time:</HeroSubTitle> <TimezoneClock />{' '}
                    <br />
                    <HeroSubTitle>Location:</HeroSubTitle> Halifax, Nova Scotia,
                    Canada 🇨🇦
                </HeroDescription>
            </HeroContainer>
            <FormContainer>
                <FormHeader>
                    <HeroSubTitle>
                        Reach Out To Me Below
                        <HeroDescription>
                            I look forward to speaking with you!
                        </HeroDescription>
                    </HeroSubTitle>
                    <ClearAllIcon size=" 2rem" onClick={resetForm} />
                </FormHeader>
                <ContactForm
                    id="form__contact"
                    action=""
                    method="GET"
                    onSubmit={(event: FormEvent<HTMLFormElement>) =>
                        submitForm(event, handleFormSubmit)
                    }
                >
                    <FormLabel htmlFor="name">
                        <FormInput
                            type="text"
                            name="name"
                            onChange={handleChange}
                            value={fields.name}
                            required
                        />
                        <span>Name</span>
                    </FormLabel>
                    <FormLabel htmlFor="email">
                        <FormInput
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={fields.email}
                            required
                        />
                        <span>Email</span>
                    </FormLabel>
                    <FormLabel htmlFor="subject">
                        <FormInput
                            type="subject"
                            name="subject"
                            onChange={handleChange}
                            value={fields.subject}
                            required
                        />
                        <span>Subject</span>
                    </FormLabel>
                    <FormLabel htmlFor="subject">
                        <FormTextArea
                            rows={8}
                            name="message"
                            onChange={handleChange}
                            value={fields.message}
                            required
                        />
                        <span>Message</span>
                    </FormLabel>
                </ContactForm>
                <SubmitBtn formId="form__contact" cta="Get In Touch" />
            </FormContainer>
        </Page>
    );
}

export default ContactPage;
