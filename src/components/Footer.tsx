import React from 'react';
import styled from 'styled-components';

import { LocalTime } from './LocalTime';
import { TextLink } from './shared/buttons';
import { BodyText, SmallBodyText } from './shared/typography';
import { Socials } from './Socials';

const FooterStyled = styled.footer`
    margin: 0 auto;
    width: 100%;
    max-width: var(--spg-layout-max-width);
    padding-block: 24vh 8vh;
    background-color: transparent;

    border-top: 1px solid var(--clr-gs-600);

    display: flex;
    flex-direction: column;
    gap: 64px;

    /* Header */
    & > div:first-child {
        display: flex;
        flex-direction: column;
        gap: 8px;

        & h2 {
            font: var(--font-header);
            color: var(--clr-text-header);
        }
    }

    /* Local Time container */
    & > div:last-child {
        display: flex;
        flex-direction: column;
        gap: 24px;

        & > div {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            & > * {
                min-width: 200px;
            }
        }
    }
`;

export function Footer() {
    return (
        <FooterStyled>
            <div>
                <h2>Let's Work Together</h2>
                <BodyText>I look forward to connecting with you!</BodyText>
            </div>
            <div>
                <BodyText>
                    Say hello using the{' '}
                    <TextLink href="#contact_form">contact form</TextLink>{' '}
                    above, or you can find me on these platforms:
                </BodyText>
                <Socials />
            </div>
            <div>
                <div>
                    <BodyText>
                        Sandrico Provo © 2018 - {new Date().getFullYear()}
                    </BodyText>
                    <LocalTime />
                </div>
                <SmallBodyText>
                    Icons sourced from{' '}
                    <TextLink
                        isExternal
                        href="https://icons8.com"
                        title="icons 8"
                    >
                        icons 8
                    </TextLink>{' '}
                    &{' '}
                    <TextLink
                        isExternal
                        href="https://thenounproject.com/browse/icons/term/send/"
                        title="Noun Project"
                    >
                        Kidiladon from Noun Project
                    </TextLink>
                </SmallBodyText>
            </div>
        </FooterStyled>
    );
}
