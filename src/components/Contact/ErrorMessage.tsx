import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';

const ErrorMessageStyled = styled(motion.span)`
    color: var(--clr-danger);
    font-family: var(--font-body);
    font-size: var(--font-sm);
    height: 20px;
`;

const messageVariants: Variants = {
    initial: {
        opacity: 0,
        y: -8,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.2,
            ease: [1, 1, 1, 1],
        },
    },
    exit: {
        opacity: 0,
        y: -8,
        transition: {
            delay: 0,
            ease: [1, 1, 1, 1],
        },
    },
};

interface ErrorMessageProps {
    children: ReactNode | ReactNode[];
}

export function ErrorMessage({ children }: ErrorMessageProps) {
    return (
        <ErrorMessageStyled
            variants={messageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {children}
        </ErrorMessageStyled>
    );
}
