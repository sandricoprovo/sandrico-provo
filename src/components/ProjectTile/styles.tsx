import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProjectContainer = styled(motion.section)`
    position: relative;
    box-shadow: var(--shadow-tr-300);
    min-height: 600px;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const ProjectInfo = styled(motion.div)`
    padding: var(--space-md);
    padding: var(--space-base) var(--space-md) 0 var(--space-lg);
    color: var(--clr-text);
    width: 40%;
    height: 100%;
    z-index: 100;
    transition: color 200ms ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 2rem;

    font-family: var(--font-secondary);
    font-size: var(--font-700);
    position: relative;
    font-style: italic;
    font-weight: 900;
    line-height: 120%;

    @media screen and (max-width: 975px) {
        --clr-text: white;
        background-color: var(--clr-black-110-a70);
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
    align-items: flex-start;
    z-index: 100;
    gap: 1rem;
`;

export const ProjectStackItem = styled.p`
    font-family: var(--font-primary);
    font-size: var(--font-400);
    z-index: 100;
    padding: 0;
    line-height: 40%;
`;

export const ProjectDescriptionContainer = styled(motion.div)`
    background-color: var(--clr-pastelblue-10);
    background-color: var(--clr-pastelblue-40);
    position: absolute;
    padding: var(--space-base) var(--space-lg);
    bottom: 0%;
    left: 0;
    z-index: 100;
    width: 70%;
    min-height: 150px;

    & > p {
        color: var(--clr-text);
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
    transition: transform 400ms var(--scaleIn-bezier);

    @media screen and (max-width: 975px) {
        left: 0%;
        width: 100%;
    }
`;

export const ProjectIcons = styled(motion.div)`
    background-color: var(--clr-pastelblue-10);
    background-color: var(--clr-pastelblue-40);
    box-shadow: var(--shadow-td-300);
    border-radius: 10px;
    padding: 0.55rem 1rem;
    position: absolute;
    top: -24px;
    right: 0px;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
`;

export const ProjectIconsSeparator = styled.div`
    width: 2px;
    height: 16px;
    background-color: var(--clr-icon);
`;
