import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.section)`
    margin-block-end: var(--spg-section);
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 40px;
`;

export const IconsContainer = styled(motion.div)`
    display: flex;
    align-items: center;
    gap: 4px;

    @media screen and (hover: hover) {
        & > a:hover > svg {
            fill: var(--clr-accent);
        }
    }
`;

export const ExperienceList = styled(motion.ul)`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 80px;
`;

export const EducationList = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const EducationItem = styled.li`
    list-style: square;
    margin-inline-start: 15px;
`;