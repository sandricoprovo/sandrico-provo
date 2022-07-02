import styled from 'styled-components';
import { motion } from 'framer-motion';

const BaseButton = styled(motion.button)`
    cursor: pointer;
    background-color: transparent;
    border: none;
    border-radius: 10px;
`;

export const ContactButton = styled(BaseButton)`
    font-family: var(--font-primary);
    font-size: var(--font-400);
    color: var(--clr-text);
    padding: var(--space-sm) 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--space-sm);
    transition: color 150ms var(--fadeUp-bezier);

    &:hover,
    &:hover > div > div > svg {
        color: white;
        transition: color 200ms var(--fadeUp-bezier);
    }
`;

export const SubmitButton = styled(BaseButton)`
    border: 2px solid var(--clr-text);
    padding: 0.75rem 2rem;
    font-family: var(--font-primary);
    font-size: var(--font-400);
    color: var(--clr-text);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    transition: background-color 250ms ease-in-out;

    &:hover {
        background-color: var(--clr-btn-hover);
        border-color: var(--clr-btn-hover);
    }

    &:active {
        background-color: var(--clr-btn-active);
        border-color: var(--clr-btn-active);
    }
`;
