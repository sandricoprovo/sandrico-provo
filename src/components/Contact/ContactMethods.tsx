import React from 'react';
import styled from 'styled-components';
import { Time } from '../Time';
import { SocialsTile } from './SocialsTile';

const ContactMethodsStyled = styled.div`
    & > div {
        margin-bottom: 64px;

        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    & > div > p:first-child {
        font-family: var(--font-display);
        color: var(--clr-text);
    }
`;

export function ContactMethods() {
    return (
        <ContactMethodsStyled>
            <div>
                <p>Local Time</p>
                <Time />
            </div>
            <div>
                <p>Location</p>
                <p>Halifax, Nova Scotia, Canada</p>
            </div>
            <SocialsTile />
        </ContactMethodsStyled>
    );
}
