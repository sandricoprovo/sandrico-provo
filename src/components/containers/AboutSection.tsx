import React, { ReactNode } from 'react';
import styled from 'styled-components';

const AboutSectionStyled = styled.section`
    width: 100%;
    min-height: 740px; // Hack to prevent height shift from displacing contact from scroll ref.
    margin-block-end: var(--spg-section);

    display: flex;
    flex-direction: column;
    gap: 64px;
`;

interface AboutSectionProps {
    children: ReactNode | ReactNode[];
}

export function AboutSection({ children }: AboutSectionProps) {
    return <AboutSectionStyled>{children}</AboutSectionStyled>;
}
