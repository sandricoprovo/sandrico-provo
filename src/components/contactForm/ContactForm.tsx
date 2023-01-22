import React, { MutableRefObject } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { BodyText, SubHeader } from '../shared/typography';
import { Socials } from '../Socials';
import { fadeUp, MOTION_DEFAULTS } from '../shared/motions';

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

interface ContactFormProps {
    scrollRef: MutableRefObject<HTMLDivElement>;
}

export function ContactForm({ scrollRef }: ContactFormProps) {
    return (
        <FormContainer ref={scrollRef} data-test-id="CFC">
            <motion.div
                variants={fadeUp}
                transition={{
                    delay: 0.4,
                    duration: MOTION_DEFAULTS.DURATION,
                    ease: MOTION_DEFAULTS.EASE,
                }}
                initial="initial"
                animate="animate"
            >
                <SubHeader>Get In Touch</SubHeader>
                <BodyText shouldMotion>
                    Thanks for reaching out! Below is a form you can use to
                    contact me. If you prefer social media, you can also use the
                    links below to find me. Looking forward to connecting with
                    you!
                </BodyText>
                <Socials />
            </motion.div>
            <Form />
        </FormContainer>
    );
}
