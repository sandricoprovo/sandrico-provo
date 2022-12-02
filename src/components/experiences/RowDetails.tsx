import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Children } from '../../types/children';

const RowDetailsStyled = styled(motion.details)`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: var(--xp-row-gap);
`;

const RowHeader = styled.summary`
    font: var(--font-body);
    color: var(--clr-text-header);
    cursor: pointer;
    margin-block-end: 8px;

    @media screen and (hover: hover) {
        &:hover {
            color: var(--clr-accent);
        }
    }
`;

const RowList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 16px;

    & li {
        list-style: square;
        margin-inline-start: 18px;
    }
`;

interface RowDetailsProps {
    children: Children;
}

export function RowDetails({ children }: RowDetailsProps) {
    return (
        <RowDetailsStyled>
            <RowHeader>Details</RowHeader>
            <RowList>{children}</RowList>
        </RowDetailsStyled>
    );
}
