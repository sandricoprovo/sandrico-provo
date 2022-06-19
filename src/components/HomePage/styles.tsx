import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroSection = styled.section`
    height: 100%;
    min-height: 600px;
    margin-bottom: var(--space-xl);
    display: flex;
    flex-direction: column;
    gap: var(--space-xl);

    @media (max-width: 575px) {
        gap: var(--space-xxxl);
    }
`;

export const HeroHeader = styled(motion.h1)`
    font-family: var(--font-secondary);
    font-size: var(--font-900);
    font-weight: 900;
    margin-block-end: var(--space-sm);
    line-height: 120%;
    letter-spacing: 2px;
    font-style: italic;

    @media (max-width: 575px) {
        font-size: var(--font-700);
    }
`;

export const HeroContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 1rem;
`;

export const HeroText = styled(motion.p)`
    font-family: var(--font-primary);
    font-size: var(--font-400);
    line-height: 180%;
    max-width: 550px;
`;

export const HeroImageContainer = styled(motion.div)`
    border: 2px solid blue;
    width: 100%;
    height: 100%;
    min-width: 300px;
    max-width: 800px;
    min-height: 175px;
    max-height: 300px;
`;

export const HeroSubHeader = styled(motion.h2)`
    font-family: var(--font-primary);
    font-size: var(--font-800);
    font-weight: 400;
    text-align: right;
    line-height: 120%;

    @media (max-width: 575px) {
        font-size: var(--font-600);
    }
`;

export const ContentSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media (max-width: 575px) {
        gap: var(--space-xl);
    }
`;

export const SectionHeader = styled.h3`
    font-family: var(--font-primary);
    font-size: var(--font-800);
    font-weight: 400;
`;

export const ProjectsContainer = styled(motion.div)`
    position: relative;
    height: 88vh;
    min-height: 600px;
    max-height: 800px;
    padding: var(--space-lg) 2vw;
`;

export const WorkContainer = styled(motion.div)`
    padding: var(--space-lg);
    width: 100%;
    display: grid;
    justify-content: flex-start;
    align-items: center;
    grid-template-columns: repeat(auto-fit, 300px);
    gap: var(--space-lg);
`;

export const WorkSectionHeader = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: var(--space-lg);
`;

export const WorkIconsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: var(--space-base);
`;

export const AboutMeContent = styled(motion.p)`
    padding: var(--space-lg);
    width: 100%;
    max-width: 100ch;
    font-family: var(--font-primary);
    font-size: var(--font-400);
    font-weight: 400;
    line-height: 180%;
`;
