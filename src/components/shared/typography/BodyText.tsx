import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { MotionProps } from '../../../types/motion';
import { fadeUp, MOTION_DEFAULTS } from '../motions';

const BodyTextStyled = styled(motion.p)`
    font: var(--font-body);
    color: var(--clr-text);
    max-width: 80ch;
`;

interface BodyTextProps extends MotionProps {
    children: ReactNode | ReactNode[];
}

export function BodyText({
    children,
    motionDelay,
    shouldMotion = false,
}: BodyTextProps) {
    return (
        <BodyTextStyled
            variants={shouldMotion ? fadeUp : {}}
            transition={{
                delay: motionDelay ?? MOTION_DEFAULTS.DELAY,
                ease: MOTION_DEFAULTS.EASE,
            }}
            initial="initial"
            animate="animate"
        >
            {children}
        </BodyTextStyled>
    );
}
