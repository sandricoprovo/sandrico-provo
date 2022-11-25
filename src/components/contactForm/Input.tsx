import React, { ChangeEvent, HTMLInputTypeAttribute } from 'react';
import styled from 'styled-components';

const InputStyled = styled.input`
    width: 100%;
    padding: 8px;
    font: var(--font-body);
    color: var(--clr-text);
    border: 1px solid var(--clr-text);
    border-radius: 5px;
    background-color: transparent;
`;

interface InputProps {
    fieldName: string;
    fieldValue: string;
    type?: HTMLInputTypeAttribute;
    changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function Input({
    changeHandler,
    fieldName,
    fieldValue,
    type,
}: InputProps) {
    return (
        <InputStyled
            onChange={changeHandler}
            name={fieldName}
            value={fieldValue}
            type={type || 'text'}
        />
    );
}
