import React from 'react';
import styled from 'styled-components';

const HeaderText = styled.h2`
    font-family: var(--font-header);
    font-size: var(--font-xl);
    line-height: 100%;

    & > span {
        font-family: var(--font-display);
    }

    & > span > span {
        font-family: var(--font-display);
        color: var(--clr-main);
    }
`;

export function Header() {
    return (
        <HeaderText>
            A little <br />
            <span>
                About Me<span>.</span>
            </span>
        </HeaderText>
    );
}
