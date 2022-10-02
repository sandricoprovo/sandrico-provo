import { useState, useEffect } from 'react';

interface WindowSize {
    height: number | undefined;
    width: number | undefined;
}

export function useWindowSize() {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        // Sets the window size when run.
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        // Watches resizing of window/
        window.addEventListener('resize', handleResize);

        // Handles setting values on load.
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
}
