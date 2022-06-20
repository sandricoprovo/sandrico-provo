import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProjectPagination = styled(motion.div)`
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
