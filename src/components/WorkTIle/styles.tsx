import styled from 'styled-components';
import { motion } from 'framer-motion';

export const WorkTileContainer = styled(motion.div)`
    height: 100%;
    max-width: 350px;
    box-shadow: var(--shadow-tr-300);

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const WorkTileHeader = styled.div`
    background-color: var(--clr-white-60);
    padding: 1rem 1rem 1rem 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const WorkTitle = styled.h4`
    font-family: var(--font-secondary);
    font-size: var(--font-600);
    font-style: italic;
    color: var(--clr-text);
    line-height: 120%;
`;

export const WorkHeaderDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const WorkHeaderDetail = styled.p`
    font-family: var(--font-primary);
    font-size: var(--font-400);
    color: var(--clr-text);
    line-height: 120%;
`;

export const WorkEmployerLink = styled(motion.a)`
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    color: var(--clr-pastelblue-40);
    transition: color 400ms var(--fadeUp-bezier);

    &:hover {
        color: var(--clr-pastelblue-30);
    }
    &:active {
        color: var(--clr-pastelblue-50);
    }
`;

export const WorkDetailsContainer = styled(motion.div)`
    position: relative;
    background-color: var(--clr-pastelblue-40);
    width: 100%;
    padding: 1rem 1rem 1rem 0.6rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const WorkDetail = styled.div`
    font-family: var(--font-primary);
    font-size: var(--font-400);
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    line-height: 180%;
    gap: 0.5rem;
`;
