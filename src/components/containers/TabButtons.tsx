import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { fadeUp, MOTION_DEFAULTS } from '../shared/motions';

const TabButtonsStyled = styled(motion.ul)`
    width: 100%;

    display: flex;
    align-items: center;

    & > li {
        list-style: none;
        width: 150px;
    }
`;

interface TabButtonsProps {
    children: ReactNode | ReactNode[];
}

export function TabButtons({ children }: TabButtonsProps) {
    return (
        <TabButtonsStyled
            variants={fadeUp}
            transition={{
                delay: 0.3,
                duration: MOTION_DEFAULTS.DURATION,
                ease: MOTION_DEFAULTS.EASE,
            }}
            initial="initial"
            animate="animate"
        >
            {children}
        </TabButtonsStyled>
    );
}
