import styled from 'styled-components';

export const HeroContainer = styled.section`
    width: 100%;
    margin-block-start: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const HeroTitle = styled.div`
    font-family: var(--font-secondary);
    font-size: var(--font-900);
    line-height: 120%;
    font-style: italic;
    font-weight: 900;
`;

export const HeroDescription = styled.p`
    font-family: var(--font-primary);
    font-size: var(--font-400);
    font-weight: 400;
    line-height: 180%;
    max-width: 100ch;
`;

export const HeroImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 50vh;
    overflow: hidden;
`;

export const UsesContainer = styled.div`
    width: 100%;
    max-width: 1440px;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: start;
    gap: 8rem;
`;

export const GearContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 1.5rem;
`;

export const ListTitle = styled.h2`
    font-family: var(--font-secondary);
    font-size: var(--font-600);
    font-style: italic;
    font-weight: 900;
`;

export const GearList = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 1rem;
`;
export const GearListItem = styled.li`
    width: 100%;
    font-family: var(--font-primary);
    font-size: var(--font-400);
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 2rem;
`;
