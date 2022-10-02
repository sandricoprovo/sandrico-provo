import { useState, useEffect, MutableRefObject } from 'react';

export function useInView<T extends Element>(
    ref: MutableRefObject<T>,
    rootMargin = '0px'
): boolean {
    const [isInView, setIsInView] = useState<boolean>(false);

    useEffect(() => {
        // Creates a new observer.
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update our state when observer callback fires
                setIsInView(entry.isIntersecting);
            },
            {
                rootMargin,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        // Removes observer on unmount.
        return () => {
            observer.unobserve(ref.current);
        };
    }, []);

    return isInView;
}
