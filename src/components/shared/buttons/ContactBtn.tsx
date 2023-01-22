import { motion } from 'framer-motion';
import styled from 'styled-components';

import { Children } from '../../../types/children';
import { fadeUp, MOTION_DEFAULTS } from '../motions';

const ContactBtnStyled = styled(motion.a)`
    flex-basis: auto;

    background-color: var(--clr-accent);
    padding: 20px 40px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    color: var(--clr-gs-900);
    font-weight: 600;
    text-decoration: none;
    font-family: var(--font-primary);
    transition: color var(--hover-duration) var(--easing-hover),
        background-color var(--hover-duration) var(--easing-hover);

    &:focus {
        background-color: var(--clr-accent-focus);
    }

    &:active {
        background-color: var(--clr-accent-active);
    }

    @media screen and (hover: hover) {
        &:hover {
            background-color: var(--clr-accent-focus);
        }
    }
`;

interface ContactBtnProps {
    children: Children;
}

export function ContactBtn({ children }: ContactBtnProps) {
    return (
        <ContactBtnStyled
            href="#contact_form"
            data-test-id="CFL-1"
            type="button"
            variants={fadeUp}
            transition={{
                delay: MOTION_DEFAULTS.DELAY,
                duration: MOTION_DEFAULTS.DURATION,
                ease: MOTION_DEFAULTS.EASE,
            }}
            initial="initial"
            animate="animate"
        >
            {children}
        </ContactBtnStyled>
    );
}
