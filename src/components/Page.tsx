import styled from 'styled-components';

const PageContainer = styled.main<{ gap?: number; marginend?: number }>`
    padding: 4rem var(--space-lg);
    background-color: var(--clr-background);
    width: 100%;
    margin-block-end: ${({ marginend }) =>
        !marginend ? '0rem' : `${marginend}rem`};
    grid-row: 2 / 2;
    display: flex;
    flex-direction: column;
    gap: var(--space-xxxl);
    gap: ${({ gap }) => (!gap ? '10rem' : `${gap}rem`)};

    @media (max-width: 1440px) {
        padding: var(--space-xs) var(--space-lg);
    }
    @media (max-width: 575px) {
        padding: var(--space-md) var(--space-lg);
    }
`;

export default PageContainer;
