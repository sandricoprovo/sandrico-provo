import { useState, useEffect } from 'react';

interface WindowSize {
    width: number | undefined;
    height: number | undefined;
}

export function useWindowSize(): {
    windowSize: WindowSize;
    isMobileWidth: boolean;
} {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: undefined,
        height: undefined,
    });
    const [isMobileWidth, setIsMobileWidth] = useState(false);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 575) setIsMobileWidth(true);
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        // Adds event listener
        window.addEventListener('resize', handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return { windowSize, isMobileWidth };
}
