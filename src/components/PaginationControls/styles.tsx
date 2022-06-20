import styled from 'styled-components';
import { motion } from 'framer-motion';

export const PaginationContainer = styled(motion.div)`
    background-color: var(--clr-pastelblue-10);
    background-color: var(--clr-pastelblue-40);
    box-shadow: var(--shadow-td-300);
    border-radius: 10px;
    width: 100%;
    max-width: 275px;
    padding: 0.55rem 1rem;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
`;

export const PaginationPosition = styled.p`
    font-family: var(--font-primary);
    font-size: var(--font-400);
    font-weight: 400;
`;
