import { useEffect, useState } from 'react';

/**
 * Receive a percentage of the scrollY by providing a factor as a multiplier.
 * @param scrollFactor - A percentage to multiple the scrollY position by.
 * @returns A percentage of the current scroll position.
 *
 */
export function useScrollPosition(scrollFactor = 0) {
    // NOTES: Lower scrollFactors return lower deltas.
    const [position, setPosition] = useState(0);

    function onScroll() {
        setPosition(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll);

        // Clears event listener on unmount
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return position * scrollFactor;
}
