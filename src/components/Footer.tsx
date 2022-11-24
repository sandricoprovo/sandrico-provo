import React from 'react';
import styled from 'styled-components';

import { BodyText, SubHeader } from './shared/typography';
import { Socials } from './Socials';

const FooterStyled = styled.footer`
    border: 2px solid red;

    margin: 0 auto;
    width: 100%;
    max-width: var(--spg-layout-max-width);
    padding-block: calc(var(--spg-padding-block) * 4) var(--spg-padding-block);
    background-color: transparent;
`;

export function Footer() {
    // Link to icons 8 = https://icons8.com
    return (
        <FooterStyled>
            <SubHeader>Let's Work Together</SubHeader>
            <BodyText>I'm excited to connect with you.</BodyText>
            <Socials />
        </FooterStyled>
    );
}
