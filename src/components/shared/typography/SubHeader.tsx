import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { fadeUp, MOTION_DEFAULTS } from '../motions';

const SubHeaderStyled = styled(motion.h2)`
    font: var(--font-subheader);
    color: var(--clr-text-header);
`;

interface SubHeaderProps {
    children: ReactNode | ReactNode[];
}

export function SubHeader({ children }: SubHeaderProps) {
    return (
        <SubHeaderStyled
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
        </SubHeaderStyled>
    );
}
