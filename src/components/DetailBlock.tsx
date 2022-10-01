import React from 'react';
import styled from 'styled-components';

const DetailBlockStyled = styled.div<{ listDirection: string }>`
    --block-margin-btm: 40px;
    max-width: 550px;

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
        flex-wrap: wrap;
        flex-direction: ${({ listDirection }) => listDirection};
        justify-content: flex-start;
        align-items: start;
        gap: 24px;
    }
`;

interface DetailBlockProps {
    label: string;
    list: string[];
    listDirection: 'row' | 'column';
}

export function DetailBlock({
    list,
    label,
    listDirection = 'column',
}: DetailBlockProps) {
    return (
        <DetailBlockStyled listDirection={listDirection}>
            <p>{label}</p>
            <div />
            <ul>
                {list.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </DetailBlockStyled>
    );
}
