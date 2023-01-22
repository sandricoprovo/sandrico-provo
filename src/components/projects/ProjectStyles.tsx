import styled from 'styled-components';

export const Container = styled.section`
    margin-block-start: calc(var(--spg-padding-block) * 0.32);
    margin-block-end: var(--spg-section);
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 40px;
`;

export const Grid = styled.section`
    width: 100%;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 64px;
`;
