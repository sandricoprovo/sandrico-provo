import styled from 'styled-components';
import { motion } from 'framer-motion';

const BaseButton = styled(motion.button)`
    cursor: pointer;
    background-color: transparent;
    border: none;
    border-radius: 20px;
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
    &:hover > div > svg {
        color: white;
        transition: color 200ms var(--fadeUp-bezier);
    }
`;
