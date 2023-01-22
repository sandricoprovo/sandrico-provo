import React from 'react';
import styled from 'styled-components';

import { useRefsContext } from '../contexts/refsContext';

import { LocalTime } from './LocalTime';
import { ContactBtn, TextLink } from './shared/buttons';
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

    /* Contact */
    & > div:nth-child(2) > button:last-child {
        margin-block-start: 21px;
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
    const { contactFormRef, scrollToRef } = useRefsContext();

    return (
        <FooterStyled>
            <div>
                <h2>Let's Connect</h2>
                <BodyText>I look forward to connecting with you!</BodyText>
            </div>
            <div>
                <BodyText>
                    You can say hello using the contact button below, or you can
                    find me on these platforms:
                </BodyText>
                <Socials />
                <ContactBtn clickHandler={() => scrollToRef(contactFormRef)}>
                    {' '}
                    Say Hello 👋🏾
                </ContactBtn>
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
                        testId="I8L-1"
                    >
                        icons 8
                    </TextLink>
                    , as well as{' '}
                    <TextLink
                        isExternal
                        href="https://thenounproject.com/browse/icons/term/send/"
                        title="Noun Project"
                        testId="NP-1"
                    >
                        Kidiladon
                    </TextLink>{' '}
                    &{' '}
                    <TextLink
                        isExternal
                        href="https://thenounproject.com/browse/icons/term/loading/"
                        title="Noun Project"
                        testId="NP-2"
                    >
                        Logodemia
                    </TextLink>{' '}
                    from the Noun Project.
                </SmallBodyText>
            </div>
        </FooterStyled>
    );
}
