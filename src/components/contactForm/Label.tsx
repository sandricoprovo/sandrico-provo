import React from 'react';
import styled from 'styled-components';

import { Children } from '../../types/children';

const LabelStyled = styled.label`
    display: flex;
    flex-direction: column;
    gap: 8px;

    & > input,
    & > textarea {
        transition: border-color var(--hover-duration) var(--easing-hover);
    }

    @media screen and (hover: hover) {
        & > input:hover,
        & > textarea:hover {
            border-color: var(--clr-accent);
        }
    }
`;

interface LabelProps {
    children: Children;
    fieldName: string;
}

export function Label({ children, fieldName }: LabelProps) {
    return <LabelStyled htmlFor={fieldName}>{children}</LabelStyled>;
}
