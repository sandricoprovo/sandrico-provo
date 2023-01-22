import React from 'react';
import styled from 'styled-components';

import { LogoContainer } from './containers/LogoContainer';
import {
    CssLogo,
    ESLintLogo,
    GraphQlLogo,
    HtmlLogo,
    JavaScriptLogo,
    NextLogo,
    NodeJsLogo,
    PostgreSQLLogo,
    ReactLogo,
    TypeScriptLogo,
    ViteLogo,
} from './shared/logos';
import { BodyText } from './shared/typography';

const TechStackStyled = styled.section`
    /* margin-block-start: 24px; */

    display: flex;
    flex-direction: column;
    gap: 24px;

    & > ul {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 16px;
    }
`;

export function TechStack() {
    const stackLogos = [
        ReactLogo,
        TypeScriptLogo,
        JavaScriptLogo,
        NextLogo,
        HtmlLogo,
        CssLogo,
        NodeJsLogo,
        PostgreSQLLogo,
        GraphQlLogo,
        ESLintLogo,
        ViteLogo,
    ];

    const nonLogoStack = ['Styled Components', 'Git', 'Framer Motion'];

    return (
        <TechStackStyled>
            <LogoContainer>
                {stackLogos.map((logo, index) => (
                    <li key={index}>{logo({ order: index })}</li>
                ))}
            </LogoContainer>
            <ul>
                {nonLogoStack.map((tech) => (
                    <li key={tech}>
                        <BodyText shouldMotion>{tech}</BodyText>
                    </li>
                ))}
            </ul>
        </TechStackStyled>
    );
}
