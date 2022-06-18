import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProjectContainer = styled(motion.section)`
    position: relative;
    box-shadow: var(--shadow-tr-300);
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
`;

export const ProjectInfo = styled(motion.div)`
    background-color: var(--clr-white-60);
    padding: var(--space-md);
    padding: var(--space-base) var(--space-lg);
    color: var(--clr-text);
    width: 40%;
    height: 100%;
    z-index: 100;
    transition: color 200ms ease-in-out;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;

    @media screen and (max-width: 975px) {
        --clr-text: white;
        background-color: hsla(0, 0%, 00%, 0.4);
        width: 100%;
    }
`;

export const ProjectTitle = styled.h4`
    font-family: var(--font-secondary);
    font-size: var(--font-700);
    position: relative;
    font-style: italic;
    font-weight: 900;
    line-height: 120%;
`;

export const ProjectStack = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;
    z-index: 100;
    gap: 1rem;
`;

export const ProjectStackItem = styled.p`
    font-family: var(--font-primary);
    font-size: var(--font-400);
    z-index: 100;
`;

export const ProjectDescriptionContainer = styled.div`
    background-color: var(--clr-pastelblue-10);
    position: absolute;
    padding: var(--space-base) var(--space-lg);
    bottom: 0%;
    left: 0;
    z-index: 100;
    width: 70%;
    min-height: 150px;

    & > p {
        font-family: var(--font-primary);
        font-size: var(--font-400);
        font-weight: 400;
        line-height: 180%;
    }

    @media screen and (max-width: 975px) {
        width: 100%;
    }

    @media screen and (max-width: 575px) {
        & > p {
            font-size: calc(var(--font-400) * 0.9);
        }
    }
`;

export const ProjectImage = styled(motion.div)`
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 40%;
    width: 60%;
    height: 100%;
    z-index: 1;

    @media screen and (max-width: 975px) {
        left: 0%;
        width: 100%;
    }
`;

export const ProjectIcons = styled(motion.div)`
    background-color: var(--clr-pastelblue-10);
    box-shadow: var(--shadow-td-300);
    border-radius: 10px;
    padding: 0.55rem 1rem;
    position: absolute;
    top: -24px;
    right: -2vw;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
`;
