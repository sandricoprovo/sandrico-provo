import React, { ReactNode } from 'react';
import styled from 'styled-components';

const LinkWrapperStyled = styled.div`
    transition: transform 0.2s cubic-bezier(0.46, 0.03, 0.52, 0.96);

    & > a {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
    }

    &:active > a > svg,
    &:focus > a > svg {
        stroke: var(--clr-icon-active);
    }

    @media (hover: hover) {
        cursor: pointer;

        &:hover {
            transform: translateY(-8px) scale(1.15);
        }
    }
`;

export function LinkWrapper({ children }: { children: ReactNode }) {
    return <LinkWrapperStyled>{children}</LinkWrapperStyled>;
}
