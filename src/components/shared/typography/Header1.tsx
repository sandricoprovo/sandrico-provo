import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { MotionProps } from '../../../types/motion';
import { fadeUp, MOTION_DEFAULTS } from '../motions';

const Header1Styled = styled(motion.h1)`
    font: var(--font-header);
    color: var(--clr-text-header);
`;

interface Header1Props extends MotionProps {
    children: ReactNode | ReactNode[];
}

export function Header1({
    children,
    motionDelay,
    shouldMotion = false,
}: Header1Props) {
    return (
        <Header1Styled
            variants={shouldMotion ? fadeUp : {}}
            transition={{
                delay: motionDelay ?? MOTION_DEFAULTS.DELAY,
                ease: MOTION_DEFAULTS.EASE,
            }}
            initial="initial"
            animate="animate"
        >
            {children}
        </Header1Styled>
    );
}
