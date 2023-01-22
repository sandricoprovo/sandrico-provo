import styled from 'styled-components';

export const Footer = styled.footer`
    margin: 0 auto;
    width: 100%;
    max-width: var(--spg-layout-max-width);
    padding-block: 24vh 8vh;
    background-color: transparent;
    border-top: 1px solid var(--clr-gs-600);


    display: flex;
    flex-direction: column;
    gap: 64px;
`;

export const Hero = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const Header = styled.h2`
    font: var(--font-header);
    color: var(--clr-text-header);
`;

export const ContactInfo = styled.div`
    & > button:last-child {
        margin-block-start: 21px;
    }
`;

export const BottomRow = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const CopyRightLine = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    & > * {
        min-width: 200px;
    }
`;
