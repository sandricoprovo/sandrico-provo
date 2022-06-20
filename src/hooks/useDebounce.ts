import { useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
    const [debounceValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        // Runs the timers.
        const timer = setTimeout(() => setDebouncedValue(value), delay);
        // Clears the timer on unmount.
        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);

    return debounceValue;
}
