import { useState, ChangeEvent, FormEvent, useRef, useMemo } from 'react';

import { SubmitStatusesAvailable } from '../types/form';

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
    const [submitStatus, setSubmitStatus] =
        useState<SubmitStatusesAvailable>('none');
    const [submitInProgress, setSubmitInProgress] = useState(false);
    // Notes if a user has tried to enter any content
    const isClean = useRef(true);

    // Note: Checks are done for empty fields & errors because the are technically two different states that should prevent form submission.
    const hasEmptyFields = useMemo(
        () => Object.values(fields).some((value) => !value),
        [fields]
    );
    const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

    function handleAddError(name: string) {
        setErrors({
            ...errors,
            [name]: `Please enter a valid ${name}.`,
        });
    }

    function handleRemoveError(name: string) {
        const updatedErrors = { ...errors };
        delete updatedErrors[name as keyof typeof errors];
        setErrors(updatedErrors);
    }

    function checkForError(name: string, value: string) {
        switch (name) {
            case 'email':
                // eslint-disable-next-line no-useless-escape
                if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value)) {
                    handleAddError(name);
                } else {
                    handleRemoveError(name);
                }
                break;
            default: {
                if (!value || value.length <= 0) {
                    handleAddError(name);
                } else {
                    handleRemoveError(name);
                }
            }
        }
    }

    // Handles input changes.
    function handleChange(
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        if (isClean.current) {
            isClean.current = false;
        }

        const { name, value } = event.target;

        // Updates the errors object
        checkForError(name, value);

        setFields({ ...fields, [name]: value });
    }

    // Handle form reset.
    function resetForm() {
        isClean.current = true;
        setFields(initial);
        setErrors({});
    }

    // Handle form clearing.
    function clearForm() {
        const blankState = Object.fromEntries(
            Object.entries(fields).map(([key]) => [key, ''])
        ) as FieldValues<T>;

        isClean.current = true;
        setFields(blankState);
        setErrors({});
    }

    // Handles form submission.
    function submitForm(
        event: FormEvent<HTMLFormElement>,
        submitHandler: (eventObj: FormEvent<HTMLFormElement>) => void
    ) {
        event.preventDefault();

        if (hasEmptyFields || hasErrors) {
            return;
        }

        // Submits form if validation is passed
        submitHandler(event);
    }

    // Handles updating the state of a submission so forms can react to their submit attempts
    function updateSubmitStatus(didSucceed: boolean) {
        if (!didSucceed) {
            setSubmitStatus('failed');
        } else {
            setSubmitStatus('succeeded');
        }

        // Resets the status after 3 seconds.
        setTimeout(() => setSubmitStatus('none'), 3000);
    }

    function toggleSubmitProgressStatus(status = !submitInProgress) {
        setSubmitInProgress(status);
    }

    return {
        fields,
        errors,
        disableSubmit: hasEmptyFields || hasErrors,
        submitStatus,
        submitInProgress,
        handleChange,
        clearForm,
        resetForm,
        submitForm,
        updateSubmitStatus,
        toggleSubmitProgressStatus,
    };
}
