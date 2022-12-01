import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import styled from 'styled-components';

import { useInView } from '../../hooks/useInView';
import { GearList as IGearList } from '../../types/gear';
import { fadeUp, MOTION_DEFAULTS } from '../shared/motions';

const GearTile = styled(motion.div)`
    min-width: 300px;

    display: flex;
    flex-direction: column;
    gap: 8px;

    & > h3 {
        font-size: var(--font-200);
        font-family: var(--font-primary);
        font-weight: normal;
        line-height: 180%;
    }

    & > ul {
        display: flex;
        flex-direction: column;

        & > li {
            list-style: square;
            margin-inline-start: 18px;
            font: var(--font-body);
        }
    }
`;

interface GearListProps {
    gear: IGearList;
}

export function GearList({ gear }: GearListProps) {
    const { label, list } = gear;
    const itemsRef = useRef<HTMLUListElement>(null);
    const isItemsInView: boolean = useInView<HTMLUListElement | null>(
        itemsRef,
        {
            triggerOnce: true,
            threshold: 1,
            rootMargin: '0px',
        }
    );

    return (
        <GearTile>
            <h3>{label}</h3>
            <ul ref={itemsRef}>
                {isItemsInView &&
                    list.map((item, index) => (
                        <motion.li
                            key={`${item}_${index}`}
                            variants={fadeUp}
                            transition={{
                                delay: index / 10,
                                duration: MOTION_DEFAULTS.DURATION,
                                ease: MOTION_DEFAULTS.EASE,
                            }}
                            initial="initial"
                            animate="animate"
                        >
                            {item}
                        </motion.li>
                    ))}
            </ul>
        </GearTile>
    );
}
