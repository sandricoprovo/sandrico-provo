import { MutableRefObject, useEffect, useRef, useState } from 'react';

interface Options {
    rootMargin?: string;
    threshold?: number;
    triggerOnce?: boolean;
}

export function useInView<T extends Element | null>(
    ref: MutableRefObject<T>,
    options: Options = {} as Options
) {
    const {
        rootMargin = '0px',
        threshold = 0.4,
        triggerOnce = false,
    } = options;

    const [isInView, setIsInView] = useState(false);
    const shouldIntersectOnce = useRef(false);

    function updateIntersectingStatus([entry]: IntersectionObserverEntry[]) {
        const { isIntersecting } = entry;
        // Prevents the element from unmounting when not in view if triggerOnce is set.
        if (shouldIntersectOnce.current) return;
        if (triggerOnce && isIntersecting) {
            shouldIntersectOnce.current = true;
        }

        setIsInView(isIntersecting);
    }

    useEffect(() => {
        // Splits ref element into variable to maintain reference to a single element.
        const refElement = ref.current;

        const observer = new IntersectionObserver(updateIntersectingStatus, {
            rootMargin,
            threshold,
        });

        if (refElement) {
            observer.observe(refElement);
        }

        return () => {
            if (refElement) {
                observer.unobserve(refElement);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return isInView;
}
