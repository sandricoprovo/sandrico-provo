import React from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.h2`
    font-family: var(--font-header);
    color: var(--clr-text);
    font-size: var(--font-xxl);

    & > p {
        font-family: var(--font-display);
        font-size: var(--font-xl);

        & > span {
            color: var(--clr-main);
        }
    }
`;

export function Header() {
    return (
        <HeaderStyled>
            My
            <p>
                Story<span>.</span>
            </p>
        </HeaderStyled>
    );
}
