import { useState, useEffect, MutableRefObject } from 'react';

interface UseInViewProps<T> {
    ref: MutableRefObject<T>; // The element to be watched for intersections
    threshold: number; // Percentage of element in view before intersecting
    rootMargin?: string; // Accounts for margins of root element
    freezeOnceVisible?: boolean; // Stops the intersection if true
}

export function useInView<T extends Element>({
    ref,
    threshold,
    rootMargin = '0px',
    freezeOnceVisible = false,
}: UseInViewProps<T>): { isInView: boolean } {
    const [isInView, setIsInView] = useState<boolean>(false);
    const [observerEntry, setObserverEntry] =
        useState<IntersectionObserverEntry>();

    // Freezes the observer so element remains visible
    const isObserverFrozen = observerEntry?.isIntersecting && freezeOnceVisible;

    const updateObserverEntry = ([
        entry,
    ]: IntersectionObserverEntry[]): void => {
        setIsInView(entry.isIntersecting); // Updates in view state
        setObserverEntry(entry); // Tracks entry
    };

    useEffect(() => {
        const rootElement = ref.current; // Ref to DOM element
        const hasObserverSupport = !!window.IntersectionObserver;

        // Handles freezing
        if (!hasObserverSupport || isObserverFrozen || !rootElement) return;

        // Creates new observer
        const observerOptions: IntersectionObserverInit = {
            rootMargin,
            threshold: threshold / 100,
        };
        const observer = new IntersectionObserver(
            updateObserverEntry,
            observerOptions
        );

        // Attaches & detaches the observer on mount and unmount.
        if (rootElement) observer.observe(rootElement);
        return () => {
            observer.unobserve(rootElement);
        };
    }, [isObserverFrozen, ref, rootMargin, threshold]);

    return { isInView };
}
