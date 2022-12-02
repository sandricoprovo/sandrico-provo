import React, { ReactNode } from 'react';
import styled from 'styled-components';

const HeroSectionStyled = styled.section`
    margin-block-end: var(--spg-section);

    display: flex;
    flex-direction: column;
    gap: 24px;
`;

interface BodyTextProps {
    children: ReactNode | ReactNode[];
    sectionId?: string;
}

export function HeroSection({ children, sectionId = '' }: BodyTextProps) {
    return <HeroSectionStyled id={sectionId}>{children}</HeroSectionStyled>;
}
