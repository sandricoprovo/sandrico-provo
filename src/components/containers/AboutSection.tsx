import React, { ReactNode } from 'react';
import styled from 'styled-components';

const AboutSectionStyled = styled.section`
    width: 100%;
    margin-block-end: var(--spg-section);

    display: flex;
    flex-direction: column;
    gap: 24px;
`;

interface AboutSectionProps {
    children: ReactNode | ReactNode[];
}

export function AboutSection({ children }: AboutSectionProps) {
    return <AboutSectionStyled>{children}</AboutSectionStyled>;
}
