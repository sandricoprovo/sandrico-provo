import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroSection = styled.section`
    height: 100%;
    min-height: 600px;
    margin-bottom: var(--space-xl);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
`;

export const HeroHeader = styled(motion.h1)`
    word-break: break-word;
    font-family: var(--font-secondary);
    font-size: var(--font-max);
    line-height: 120%;
    letter-spacing: 2px;
    margin: auto 0;

    @media (max-width: 700px) {
        font-size: calc(var(--font-max) * 1.15);
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
    width: 100%;
    height: 40%;
    min-width: 375px;
    min-height: 120px;
`;

export const HeroSubHeader = styled(motion.h2)`
    font-family: var(--font-primary);
    font-size: var(--font-800);
    word-wrap: break-word;
    text-align: right;
    padding-top: var(--space-lg);
    max-width: 375px;
    line-height: 118%;
`;

export const ContentSection = styled.section`
    /* border: 2px solid red; */
`;

export const SectionHeader = styled(motion.h3)`
    font-family: var(--font-primary);
    font-size: var(--font-800);
`;

export const ProjectsContainer = styled.div`
    padding: var(--space-lg);
    display: grid;
    gap: 8px;
    grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(400px, 1fr));

    @media (max-width: 575px) {
        padding-top: var(--space-xxl);
    }
`;
