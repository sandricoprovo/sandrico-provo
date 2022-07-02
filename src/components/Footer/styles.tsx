import styled from 'styled-components';

export const FooterContainer = styled.footer`
    border-top: 2px solid black;
    background-color: var(--clr-footer);
    padding: var(--space-lg);
    width: 100%;
    height: 100%;
    grid-row: 3 / 3;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: var(--space-lg);

    @media (max-width: 575px) {
        gap: var(--space-xxxl);
    }
`;

export const FooterContent = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: var(--space-xl);
    color: var(--clr-text);
`;

export const FooterHeader = styled.h4`
    font-family: var(--font-secondary);
    font-size: var(--font-800);
    word-break: break-word;
    max-width: 340px;
    line-height: 120%;

    @media (max-width: 575px) {
        font-size: var(--font-700);
    }
`;

export const FooterBottomBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const FooterIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--space-base);
`;

export const FooterCopyRightBar = styled.div`
    width: 50%;
    font-family: var(--font-primary);
    font-size: var(--font-300);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: var(--space-sm);
`;

export const FooterCopyRight = styled.p``;
