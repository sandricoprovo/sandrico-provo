import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProjectTileContainer = styled(motion.div)`
    background-color: var(--clr-tile-bkg);
    --clr-text: white;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: background-color 100ms ease-in-out;
    overflow: hidden;

    // TODO:
    /* &:hover {
        background-color: var(--clr-black-60);
    } */

    @media (max-width: 575px) {
        padding: 0 calc(var(--space-lg) * 0.75);
    }
`;

export const ProjectTileHeader = styled.div`
    padding: 0 var(--space-sm);
    padding-top: var(--space-md);
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
`;

export const ProjectTitle = styled.h4`
    padding-bottom: calc(var(--space-xs) / 2);
    font-family: var(--font-secondary);
    font-size: var(--font-600);
    color: var(--clr-text);
    line-height: 120%;
    width: 100%;
    flex-grow: 1;
`;

export const StackPill = styled.p`
    padding: calc(var(--space-xs) / 2) calc(var(--space-xs) / 2)
        calc(var(--space-xs) / 2) 0;
    border-radius: 16px;
    color: var(--clr-text);
    font-family: var(--font-primary);
    font-size: var(--font-200);

    @media (max-width: 575px) {
        font-size: var(--font-300);
    }
`;

export const ProjectDetailsContainer = styled.div`
    position: relative;
    padding-top: var(--space-sm);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

export const ProjectDescription = styled(motion.p)`
    z-index: 20;
    padding: 0 var(--space-sm);
    padding-bottom: var(--space-base);
    font-family: var(--font-primary);
    font-size: var(--font-400);
    color: var(--clr-text);
    line-height: 160%;
    background-color: transparent;
`;

export const ProjectBottomBar = styled.div`
    background-color: var(--clr-tile-bkg);
    box-shadow: var(--shadow-elevation-high);
    z-index: 30;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const IconsContainer = styled.div`
    padding: 0 var(--space-sm);
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: var(--space-md);
`;

export const DetailsToggle = styled(motion.button)`
    background-color: transparent;
    padding: var(--space-sm);
    color: var(--clr-text);
    border: none;
    cursor: pointer;
    font-family: var(--font-secondary);
    font-size: var(--font-400);
    position: relative;

    &:before {
        content: '';
        position: absolute;
        background-color: var(--clr-text);
        top: 70%;
        width: 0;
        height: 4px;
        transition: width 400ms var(--underline-bezier);
    }

    &:hover:before {
        content: '';
        background-color: var(--clr-text);
        width: 50%;
        transition: width 400ms var(--underline-bezier);
    }

    &:active:before {
        width: 72%;
        transition: width 400ms var(--underline-bezier);
    }
`;
