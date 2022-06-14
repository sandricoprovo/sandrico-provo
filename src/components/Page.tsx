import styled from 'styled-components';

const PageContainer = styled.main`
    padding: var(--space-xxl) var(--space-lg);
    background-color: var(--clr-background);
    width: 100%;
    height: 100%;
    grid-row: 2 / 2;
    gap: var(--space-xxxl);
    display: flex;
    flex-direction: column;

    @media (max-width: 1440px) {
        padding: var(--space-xs) var(--space-lg);
    }
    @media (max-width: 575px) {
        padding: var(--space-md) var(--space-lg);
    }
`;

export default PageContainer;
