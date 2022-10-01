import { useState, useEffect, ChangeEvent, FormEvent } from 'react';

type FieldValues<T> = {
    [Property in keyof T]: T[Property];
};

type ErrorMessages<T> = {
    [Property in keyof T]?: string | undefined;
};

export function useForm<T>(initial: FieldValues<T>) {
    const [fields, setFields] = useState<FieldValues<T>>(initial);
    const [errors, setErrors] = useState<ErrorMessages<T>>(
        {} as ErrorMessages<T>
    );
    const initialValues = Object.values(initial).join('');

    useEffect(() => {
        setFields(initial);
    }, [initialValues]);

    // Handles input changes.
    function handleChange(
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        const { name, value } = event.target;

        // Updates the errors object
        if (value.length <= 0) {
            setErrors({ ...errors, [name]: `The ${name} field is required.` });
        } else {
            const updatedErrors = { ...errors };
            delete updatedErrors[name as keyof typeof errors];
            setErrors(updatedErrors);
        }

        // TODO: handle specific input types
        setFields({ ...fields, [name]: value });
    }

    // Handle form reset.
    function resetForm() {
        setFields(initial);
    }

    // Handle form clearing.
    function clearForm() {
        const blankState = Object.fromEntries(
            Object.entries(fields).map(([key]) => [key, ''])
        ) as FieldValues<T>;

        setFields(blankState);
    }

    // Handles form submission.
    function submitForm(
        event: FormEvent<HTMLFormElement>,
        submitHandler: (eventObj: FormEvent<HTMLFormElement>) => void
    ) {
        event.preventDefault();
        // Runs validation
        // Submits form if validation is passed
        submitHandler(event);
    }

    return {
        fields,
        errors,
        handleChange,
        clearForm,
        resetForm,
        submitForm,
    };
}
