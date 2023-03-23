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
    changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
    type?: HTMLInputTypeAttribute;
    testId?: string;
}

export function Input({
    changeHandler,
    fieldName,
    fieldValue,
    type,
    testId = '',
}: InputProps) {
    return (
        <InputStyled
            data-test-id={testId}
            onChange={changeHandler}
            name={fieldName}
            value={fieldValue}
            type={type || 'text'}
        />
    );
}
