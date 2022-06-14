import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroSection = styled.section`
    height: 100%;
    min-height: 600px;
    margin-bottom: var(--space-xl);
    display: grid;
    gap: 4vh;
`;

export const HeroHeader = styled(motion.h1)`
    word-break: break-word;
    width: 50%;
    font-family: var(--font-secondary);
    font-size: var(--font-max);
    line-height: 120%;
    letter-spacing: 2px;
    margin: auto 0;

    @media (max-width: 975px) {
        width: 100%;
        font-size: var(--font-900);
    }

    @media (max-width: 700px) {
        font-size: calc(var(--font-max) / 1.025);
        --space-base: 0.64rem;
    }
`;

export const HeroContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
`;

export const HeroText = styled(motion.p)`
    font-family: var(--font-primary);
    font-size: var(--font-400);
    line-height: 180%;
`;

export const HeroImageContainer = styled.div`
    border: 2px solid blue;
    margin-bottom: var(--space-sm);
    width: 100%;
    height: 100%;
    min-width: 350px;
    max-width: 800px;
    min-height: 175px;
`;

export const HeroSubHeader = styled(motion.h2)`
    font-family: var(--font-primary);
    font-size: var(--font-800);
    word-wrap: break-word;
    text-align: right;
    max-width: 350;
    line-height: 118%;
`;

export const ContentSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: var(--space-sm);

    @media (max-width: 575px) {
        gap: var(--space-xl);
    }
`;

export const SectionHeader = styled(motion.h3)`
    font-family: var(--font-primary);
    font-size: var(--font-800);
`;

export const ProjectsContainer = styled.div`
    padding: var(--space-lg);
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(300px, 1fr));

    @media (max-width: 575px) {
        padding-top: var(--space-xxl);
    }
`;

export const WorkContainer = styled.div`
    padding: var(--space-lg);
    width: 100%;
    display: grid;
    justify-content: flex-start;
    align-items: center;
    grid-template-columns: repeat(auto-fit, 300px);
    gap: var(--space-lg);
`;
