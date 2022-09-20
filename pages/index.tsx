import React from 'react';
import styled from 'styled-components';

const Small = styled.h1`
    font-size: var(--font-sm);
`;
const Base = styled.h1`
    font-size: var(--font-base);
`;
const Medium = styled.h1`
    font-size: var(--font-md);
`;
const Large = styled.h1`
    font-size: var(--font-lg);
`;
const XLLarge = styled.h1`
    font-size: var(--font-xl);
`;
const XXLLarge = styled.h1`
    font-size: var(--font-xxl);
`;
const XXXLLarge = styled.h1`
    font-size: var(--font-xxxl);
`;
const Max = styled.h1`
    font-size: var(--font-max);
`;

function Home() {
    return (
        <>
            <Small>Header</Small>
            <Base>Header</Base>
            <Medium>Header</Medium>
            <Large>Header</Large>
            <XLLarge>Header</XLLarge>
            <XXLLarge>Header</XXLLarge>
            <XXXLLarge>Header</XXXLLarge>
            <Max>Header</Max>
        </>
    );
}

export default Home;
