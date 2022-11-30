import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import styled from 'styled-components';

import { fadeUp, MOTION_DEFAULTS } from '../motions';

const LogoWrapperStyled = styled(motion.div)`
    --scoped-clr: var(--clr-icon-faded);

    position: relative;
    width: 40px;
    height: 40px;

    & > svg > * {
        transition: fill var(--hover-duration) var(--easing-hover);
    }

    &:hover {
        --scoped-clr: var(--clr-icon);
    }

    &:hover > span {
        opacity: 1;
        transform: translate(-50%, -8px);
    }

    & > span {
        position: absolute;
        text-align: center;
        min-height: 20px;
        top: -32px;
        left: 50%;
        transform: translate(-50%, 0);
        padding: 8% 10px;
        background-color: var(--clr-icon-faded);
        color: var(--clr-text);
        border-radius: 6px;
        font: var(--font-body);
        font-size: var(--font-75);
        opacity: 0;
        transition: transform 0.6s var(--easing-hover),
            opacity 0.6s var(--easing-hover);

        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

interface LogoWrapperProps {
    children: ReactNode | ReactNode[];
    name: string;
    order: number;
}

export function LogoWrapper({ children, name, order }: LogoWrapperProps) {
    return (
        <LogoWrapperStyled
            title={name}
            variants={fadeUp}
            transition={{
                delay: order / 10,
                duration: MOTION_DEFAULTS.DURATION,
                ease: MOTION_DEFAULTS.EASE,
            }}
            initial="initial"
            animate="animate"
        >
            <span>{name}</span>
            {children}
        </LogoWrapperStyled>
    );
}
