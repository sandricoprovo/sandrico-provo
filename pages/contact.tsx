import Page from '../src/components/Page';
import { useForm } from '../src/hooks/useForm';
import {
    HeroContainer,
    HeroTitle,
    HeroSubTitle,
    HeroDescription,
    FormContainer,
    ContactForm,
    FormLabel,
    FormInput,
    FormTextArea,
} from '../src/components/ContactPage/styles';
import WavyText from '../src/components/WaveFadeInText';
import TimezoneClock from '../src/components/TimeZone';
import { SubmitBtn } from '../src/components/Buttons/Buttons';

function ContactPage() {
    // const { fields, handleChange, clearForm, resetForm, submitForm } = useForm({
    //     name: '',
    //     email: '',
    //     subject: '',
    //     message: '',
    // });

    // SENDS TO SENDGRID API
    // function sendFormData() {
    // 	fetch('/api/email', {
    // 		method: 'POST',
    // 		body: JSON.stringify(formValues),
    // 	});
    // }

    return (
        <Page gap={5}>
            <HeroContainer>
                <HeroTitle>
                    <WavyText
                        text="Contact"
                        delay={0.2}
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
                <HeroSubTitle>
                    Reach Out To Me Below
                    <HeroDescription>
                        I look forward to speaking with you!
                    </HeroDescription>
                </HeroSubTitle>
                <ContactForm id="form__contact">
                    <FormLabel htmlFor="name">
                        <FormInput type="text" name="name" required />
                        <span>Name</span>
                    </FormLabel>
                    <FormLabel htmlFor="email">
                        <FormInput type="email" name="email" required />
                        <span>Email</span>
                    </FormLabel>
                    <FormLabel htmlFor="subject">
                        <FormInput type="subject" name="subject" required />
                        <span>Subject</span>
                    </FormLabel>
                    <FormLabel htmlFor="subject">
                        <FormTextArea rows={8} name="message" required />
                        <span>Message</span>
                    </FormLabel>
                </ContactForm>
                <SubmitBtn
                    formId="form__contact"
                    cta="Get In Touch"
                    onClick={() => console.log('Hello Submit')}
                />
            </FormContainer>
        </Page>
    );
}

export default ContactPage;
