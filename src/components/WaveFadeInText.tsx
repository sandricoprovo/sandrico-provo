import { FC } from 'react';
import { motion, Variants, HTMLMotionProps } from 'framer-motion';

interface Props extends HTMLMotionProps<'div'> {
    text: string;
    replay: boolean;
    delay?: number;
    duration?: number;
}

const WaveFadeInText: FC<Props> = ({
    text,
    delay = 0,
    duration = 0.03,
    replay,
    ...props
}: Props) => {
    const letters = [...text];

    // Creates a variant based on props
    const containerVariant: Variants = {
        initial: {
            opacity: 0,
        },
        animate: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: duration, delayChildren: i * delay },
        }),
    };

    const child: Variants = {
        initial: {
            opacity: 0,
            y: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 200,
            },
        },
        animate: {
            opacity: 1,
            y: 20,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 200,
            },
        },
    };

    return (
        <motion.h4
            style={{
                display: 'flex',
                flexWrap: 'wrap',
            }}
            variants={containerVariant}
            initial="initial"
            animate={replay ? 'animate' : 'initial'}
            {...props}
        >
            {letters.map((letter, index) => (
                <motion.span key={index} variants={child}>
                    {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
            ))}
        </motion.h4>
    );
};

export default WaveFadeInText;
