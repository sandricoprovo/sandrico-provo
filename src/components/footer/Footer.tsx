import React from 'react';

import { useRefsContext } from '../../contexts/refsContext';
import { LocalTime } from '../LocalTime';
import { ContactBtn, TextLink } from '../shared/buttons';
import { BodyText, SmallBodyText } from '../shared/typography';
import { Socials } from '../Socials';

import * as Styled from './FooterStyles';

export function Footer() {
    const { contactFormRef, scrollToRef } = useRefsContext();

    return (
        <Styled.Footer>
            <Styled.Hero>
                <Styled.Header>Let's Connect</Styled.Header>
                <BodyText>I'd love to chat with you!</BodyText>
            </Styled.Hero>
            <Styled.ContactInfo>
                <BodyText>
                    Say hello using the contact button below, or find me and my
                    work on these platforms:
                </BodyText>
                <Socials />
                <ContactBtn
                    clickHandler={() => scrollToRef(contactFormRef)}
                    testId="footer-contact-btn"
                >
                    {' '}
                    Say Hello 👋🏾
                </ContactBtn>
            </Styled.ContactInfo>
            <Styled.BottomRow>
                <Styled.CopyRightLine>
                    <BodyText>
                        Sandrico Provo © 2018 - {new Date().getFullYear()}
                    </BodyText>
                    <LocalTime />
                </Styled.CopyRightLine>
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
            </Styled.BottomRow>
        </Styled.Footer>
    );
}
