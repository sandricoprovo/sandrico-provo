import {
    createContext,
    MutableRefObject,
    useContext,
    useMemo,
    useRef,
} from 'react';

import { Children } from '../types/children';

interface RefsContextProps {
    contactFormRef: MutableRefObject<HTMLDivElement>;
    scrollToRef: (ref: MutableRefObject<HTMLElement>) => void;
}

/* ====== Named Exports ====== */

export const RefsContext = createContext({} as RefsContextProps);
export const useRefsContext = () => useContext(RefsContext);

/* ====== Context Methods ====== */

// Takes in a ref object to scroll to.
function scrollToRef(ref: MutableRefObject<HTMLElement>) {
    if (ref.current) {
        ref.current.scrollIntoView({
            behavior: 'auto',
            block: 'start',
        });
    }
}

/* ====== Context Provider ====== */

interface RefsProviderProps {
    children: Children;
}

export default function RefsContextProvider({ children }: RefsProviderProps) {
    const contactFormRef = useRef<HTMLDivElement>(
        null
    ) as MutableRefObject<HTMLDivElement>;

    // Wraps the context value in useMemo to prevent re-initializing on each render.
    const contextValue = useMemo<RefsContextProps>(
        () => ({
            contactFormRef,
            scrollToRef,
        }),
        []
    );

    return (
        <RefsContext.Provider value={contextValue}>
            {children}
        </RefsContext.Provider>
    );
}
