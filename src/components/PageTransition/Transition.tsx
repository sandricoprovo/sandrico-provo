import React, { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { LogoWhite256 } from '../Logos';

const Container = styled(motion.div)`
    position: relative;
    width: 100vw;
    height: 100vh;
`;

const TransitionCover = styled(motion.div)`
    position: absolute;
    z-index: 200;
    background-color: var(--clr-text);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateY(100%);

    display: flex;
    justify-content: center;
    align-items: center;
`;

interface TransitionProps {
    children: ReactNode | ReactNode[];
}

const pageTransitionVariants: Variants = {
    initial: {
        opacity: 0,
        transition: {
            duration: 0.75,
        },
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 1,
            duration: 0.1,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.75,
        },
    },
};

const transitionCoverVariants: Variants = {
    initial: {
        y: '100%',
        transition: {
            duration: 0.75,
            ease: [0.77, 0, 0.18, 1],
        },
    },
    animate: {
        y: ['100%', '0%', '0%', '-100%'],
        transition: {
            duration: 2,
            ease: [0.77, 0, 0.18, 1],
        },
    },
    exit: {
        y: '-100%',
        transition: {
            duration: 0.75,
            ease: [0.77, 0, 0.18, 1],
        },
    },
};

export function Transition({ children }: TransitionProps) {
    const router = useRouter();

    return (
        <>
            <Container
                key={router.route}
                variants={pageTransitionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                {children}
            </Container>
            <TransitionCover
                key={`${router.route}_transition`}
                variants={transitionCoverVariants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <LogoWhite256 />
            </TransitionCover>
        </>
    );
}
