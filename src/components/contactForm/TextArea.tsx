import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

const TextAreaStyled = styled.textarea`
    width: 100%;
    padding: 8px;
    min-height: 200px;
    font: var(--font-body);
    color: var(--clr-text);
    border: 1px solid var(--clr-text);
    border-radius: 5px;
    background-color: transparent;
`;

interface TextAreaProps {
    fieldName: string;
    fieldValue: string;
    changeHandler: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    testId?: string;
}

export function TextArea({
    changeHandler,
    fieldName,
    fieldValue,
    testId = '',
}: TextAreaProps) {
    return (
        <TextAreaStyled
            data-test-id={testId}
            onChange={changeHandler}
            name={fieldName}
            value={fieldValue}
        />
    );
}
