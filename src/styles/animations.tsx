import { keyframes } from 'styled-components';

export const slideUpFadeIn = keyframes`
        0% {
            transform: translateY(50%);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
`;

export const slideDownFadeIn = keyframes`
        0% {
            transform: translateY(0);
        }
        100% {
            opacity: 0;
            transform: translateY(50%);
        }
`;
