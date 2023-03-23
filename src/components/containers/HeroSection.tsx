import React, { ReactNode } from 'react';
import styled from 'styled-components';

const HeroSectionStyled = styled.section`
    margin-block-end: var(--spg-section);

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
`;

interface BodyTextProps {
    children: ReactNode | ReactNode[];
    testId: string;
}

export function HeroSection({ children, testId = '' }: BodyTextProps) {
    return (
        <HeroSectionStyled data-test-id={testId}>{children}</HeroSectionStyled>
    );
}
