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
`;

const GearHeader = styled.h3`
    font-size: var(--font-200);
    font-family: var(--font-primary);
    font-weight: normal;
    line-height: 180%;
`;

const GearItemsList = styled.ul`
    display: flex;
    flex-direction: column;
`;

const GearItem = styled(motion.li)`
    list-style: square;
    margin-inline-start: 18px;
    font: var(--font-body);
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
            <GearHeader>{label}</GearHeader>
            <GearItemsList ref={itemsRef}>
                {isItemsInView &&
                    list.map((item, index) => (
                        <GearItem
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
                        </GearItem>
                    ))}
            </GearItemsList>
        </GearTile>
    );
}
