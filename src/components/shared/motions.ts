import { Variants } from 'framer-motion';

export const MOTION_DEFAULTS = {
    DELAY: 0,
    DURATION: 0.2,
    EASE: [0.65, 0.05, 0.36, 1],
};

export const fadeUp: Variants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
    },
};
