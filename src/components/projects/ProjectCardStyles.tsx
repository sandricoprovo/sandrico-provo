import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const Card = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    gap: 20px;

    &:hover img {
        transform: scale(1.08);
    }
`;

export const Header = styled.h3`
    font: var(--font-body);
    color: var(--clr-text-header);
`;

export const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 300px;
    background-color: var(--clr-project-img-background);
    border-radius: var(--br-image);
    overflow: hidden;
`;

export const CardImage = styled(Image)`
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    transition: transform 0.3s var(--easing-hover);
`;

export const Stack = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;

    li > p {
        font-size: var(--font-75);
    }
`;

export const StackItem = styled.li`
    & > p {
        font-size: var(--font-75);
    }
`;

export const Footer = styled.div`
    height: 40px;
    margin-top: auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`;

export const Icons = styled.div`
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--spg-links);

    @media screen and (hover: hover) {
        & > a:hover > svg {
            fill: var(--clr-accent);
        }
    }
`;
