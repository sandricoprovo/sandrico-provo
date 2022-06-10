import { useState, useCallback } from 'react';

export function useToggle(initialState = false): [boolean, () => void] {
    const [toggleState, setToggleState] = useState<boolean>(initialState);

    const toggle = useCallback(
        (): void => setToggleState((state) => !state),
        []
    );

    return [toggleState, toggle];
}
