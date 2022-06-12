import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProjectTileContainer = styled(motion.div)`
    position: relative;
    min-height: 600px;
    transition: background-color 100ms ease-in-out;
    overflow: hidden;
    box-shadow: var(--shadow-tr-300);
    border-radius: var(--tile-border-radius);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    // Scopes hover events to only devices that can have a hover
    @media (hover: hover) {
        &:hover {
            & > div:first-child {
                transform: scale(1.2);
            }
        }
    }
`;

// TODO: Use this a tile image container than zoom it in on hover
export const ProjectTileImage = styled(motion.div)<{ background: string }>`
    position: absolute;
    border-radius: var(--tile-border-radius);
    width: 100%;
    height: 100%;
    z-index: 5;
    border-radius: var(--tile-border-radius);
    background-color: var(--clr-tile-bkg);
    background-image: ${({ background }) =>
        !background ? 'none' : `url(${background})`};
    background-size: cover;
    background-repeat: no-repeat;
    transition: transform 400ms var(--scaleIn-bezier);
`;

export const ProjectTileOverlay = styled(motion.div)`
    position: absolute;
    border-radius: 20px;
    width: 100%;
    height: 100%;
    background-color: rgba(15, 15, 15, 0.88);
    z-index: 5;
`;

export const ProjectDescription = styled(motion.p)`
    --clr-text: var(--clr-white-60);
    z-index: 20;
    padding: 0 var(--tile-padding);
    margin-bottom: var(--tile-padding);
    font-family: var(--font-primary);
    font-size: var(--font-400);
    color: var(--clr-text);
    line-height: 160%;
    background-color: transparent;
`;

export const ProjectDetails = styled.div`
    background-color: var(--clr-tile-bkg);
    box-shadow: var(--shadow-elevation-high);
    padding: var(--tile-padding);
    border-radius: 0 0 20px 20px;
    z-index: 30;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1.25rem;
`;

export const ProjectTileHeader = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

export const ProjectTitle = styled.h4`
    font-family: var(--font-secondary);
    font-size: var(--font-600);
    color: var(--clr-text);
    line-height: 120%;
    width: 100%;
    flex-grow: 1;
`;

export const StackPill = styled.p`
    --pill-padding: 0.25rem;
    padding-right: var(--pill-padding);
    border-radius: 16px;
    line-height: 140%;
    color: var(--clr-text);
    font-family: var(--font-primary);
    font-size: var(--font-200);

    @media (max-width: 575px) {
        font-size: var(--font-300);
    }
`;

export const ProjectBottomBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: var(--tile-padding);
`;

export const ProjectIcons = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 80%;
    gap: 1rem;
`;

export const DetailsToggle = styled(motion.button)`
    background-color: transparent;
    padding: var(--space-sm) 0 0 var(--space-sm);
    color: var(--clr-text);
    border: none;
    cursor: pointer;
    font-family: var(--font-secondary);
    font-size: var(--font-400);
    position: relative;
    line-height: 180%;
`;