import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

import { Children } from '../../types/children';
import { MotionProps } from '../../types/motion';
import { fadeUp, MOTION_DEFAULTS } from '../shared/motions';

const RowContainerStyled = styled(motion.div)`
    --xp-row-gap: 32px;
    width: 100%;
    padding-bottom: 24px;
    border-bottom: 1px solid var(--clr-text);

    display: flex;
    flex-direction: column;
    gap: var(--xp-row-gap);
`;

interface RowContainerProps extends MotionProps {
    children: Children;
    order: number;
}

export function RowContainer({ children, order }: RowContainerProps) {
    return (
        <RowContainerStyled
            variants={fadeUp}
            transition={{
                delay: order / 100,
                duration: MOTION_DEFAULTS.DURATION,
                ease: MOTION_DEFAULTS.EASE,
            }}
            initial="initial"
            animate="animate"
        >
            {children}
        </RowContainerStyled>
    );
}
