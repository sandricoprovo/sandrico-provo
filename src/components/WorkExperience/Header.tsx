import React from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.h2`
    width: 100%;
    font-family: var(--font-header);
    font-size: var(--font-xl);
    color: var(--clr-text);
    padding: 0 var(--spacing-content-mobile);

    & > p {
        font-family: var(--font-display);
        font-size: var(--font-lg);

        & > span {
            color: var(--clr-main);
        }
    }

    @media (min-width: 575px) {
        padding: 0 var(--spacing-content);
    }
`;

export function Header() {
    return (
        <HeaderStyled>
            Work
            <p>
                Experience<span>.</span>
            </p>
        </HeaderStyled>
    );
}
