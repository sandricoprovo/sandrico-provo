import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { useInView } from '../../hooks/useInView';
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

export function ContactForm() {
    const formRef = useRef<HTMLDivElement>(null);
    const isInView: boolean = useInView<HTMLDivElement | null>(formRef, {
        triggerOnce: true,
        threshold: 1,
    });
    return (
        <FormContainer id="contact_form" data-test-id="CFC" ref={formRef}>
            {isInView && (
                <>
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
                            Thanks for reaching out! Below is a form you can use
                            to contact me. If you prefer social media, you can
                            also use the links below to find me. Looking forward
                            to connecting with you!
                        </BodyText>
                        <Socials />
                    </motion.div>
                    <Form />
                </>
            )}
        </FormContainer>
    );
}
