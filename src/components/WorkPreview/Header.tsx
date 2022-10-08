import React from 'react';

import styled from 'styled-components';

const HeaderText = styled.h3`
    font-family: var(--font-header);
    font-size: var(--font-xl);
    margin-bottom: var(--spacing-content);

    & > span:nth-of-type(1) {
        font-size: var(--font-md);
        color: var(--clr-text);
        font-family: var(--font-display);
    }

    & > span:nth-of-type(2) {
        color: var(--clr-main);
    }
`;

export function Header() {
    return (
        <HeaderText>
            <span>Recent</span> <br /> Work<span>.</span>
        </HeaderText>
    );
}
