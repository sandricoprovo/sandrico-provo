import React from 'react';
import styled from 'styled-components';

const DetailBlockStyled = styled.div<{ listDirection: string }>`
    --block-margin-btm: 40px;

    & > p {
        font-family: var(--font-header);
        font-size: var(--font-lg);
        margin-bottom: var(--block-margin-btm);
    }

    & > div {
        height: 1px;
        background-color: #d9d9d9;
        margin-bottom: var(--block-margin-btm);
    }

    & > ul {
        display: flex;
        flex-direction: ${({ listDirection }) => listDirection};
        justify-content: flex-start;
        align-items: center;
        gap: 24px;
    }
`;

export function DetailBlock() {
    return (
        <DetailBlockStyled listDirection="column">
            <p>Education</p>
            <div />
            <ul>
                <li>NSCC IT Web Programming / 2021 / Honours</li>
                <li>NSCC IT Web Programming / 2021 / Honours</li>
                <li>NSCC IT Web Programming / 2021 / Honours</li>
            </ul>
        </DetailBlockStyled>
    );
}
