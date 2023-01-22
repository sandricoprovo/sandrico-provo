import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Container = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    gap: 40px;
`;

export const Info = styled.div`
    min-width: 300px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

export const Header = styled.h3`
    font-size: var(--font-200);
    font-family: var(--font-primary);
    font-weight: 600;
    color: var(--clr-text-header);
    margin-block-end: 8px;
`;

const TextBase = css`
    font-size: var(--font-base);
    font-family: var(--font-primary);
    line-height: 190%;
`;

export const Text = styled.p`
    ${TextBase}
`;

export const TextLink = styled.a`
    ${TextBase}
    text-decoration: none;
    color: var(--clr-text);

    &:hover,
    &:focus {
        color: var(--clr-accent);

        & > span > svg {
            fill: var(--clr-accent);
        }
    }

    &:active {
        color: var(--clr-accent-active);

        & > span > svg {
            fill: var(--clr-accent-active);
        }
    }

    display: flex;
    align-items: center;
    gap: 8px;
`;

export const StackContainer = styled.div`
    margin-block-start: 40px;
`;

export const StackList = styled.ul`
    max-width: 300px;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
`;

export const StackItem = styled.li`
    list-style: none;
    font-family: var(--font-primary);
    font-size: var(--font-75);
    line-height: 180%;
`;

export const Achievements = styled.ul`
    flex: 1 1 300px;

    background-color: var(--clr-project-img-background);
    border-radius: var(--br-image);
    min-width: 300px;
    padding: 32px;

    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const AchievementItem = styled.li`
    list-style: circle;
    margin-inline: 20px;
    font-family: var(--font-primary);
    list-style-position: outside;
    line-height: 180%;
    max-width: 80ch;
`;
