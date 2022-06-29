import { useState, useEffect, ChangeEvent, FormEvent } from 'react';

export function useForm<T>(initial: T) {
    const [fields, setFields] = useState<T>(initial);

    useEffect(() => {
        setFields(initial);
    }, [initial]);

    // Handles input changes.
    function handleChange(
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        const { name, value } = event.target;
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
        ) as unknown as T;

        setFields(blankState);
    }

    // Handles form submission.
    function submitForm(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        // Runs validation
        // Runs form submit
    }

    return {
        fields,
        handleChange,
        clearForm,
        resetForm,
        submitForm,
    };
}
