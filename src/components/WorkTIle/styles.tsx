import styled from 'styled-components';
import { motion } from 'framer-motion';

export const WorkTileContainer = styled(motion.div)`
    position: relative;
    margin-bottom: var(--space-lg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: var(--space-xs);

    &:after {
        content: '';
        position: absolute;
        width: 2px;
        background-color: black;
        height: 16%;
        top: 2%;
        right: 0;
        transition: background-color 400ms var(--underline-bezier) 100ms,
            top 200ms var(--underline-bezier);
    }

    &:hover:after {
        background-color: var(--clr-main);
        top: 50%;
    }
`;

export const WorkTitle = styled.h4`
    font-family: var(--font-primary);
    font-size: var(--font-400);
    font-style: italic;
    color: var(--clr-main);
`;

export const WorkLocation = styled.p`
    width: 100%;
    font-family: var(--font-secondary);
    font-size: var(--font-600);
    margin-bottom: var(--space-sm);
`;

export const WorkDuration = styled.p`
    font-family: var(--font-primary);
    font-size: var(--font-300);
`;

export const WorkTimeLine = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--space-sm);

    & > div > svg {
        height: 24px;
        width: 24px;
    }

    @media (max-width: 575px) {
        gap: var(--space-lg);
    }
`;

export const TimeLineTile = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
