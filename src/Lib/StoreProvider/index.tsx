import { ReactNode, useRef } from "react";
import type { AppStore } from "../Store";
import { makeStore } from "../Store";
import { Provider } from "react-redux";

interface StoreProviderProps {
    readonly children: ReactNode;
}

const StoreProvider = ({children}: StoreProviderProps) => {

    const storeRef = useRef<AppStore | null>(null);

    if (!storeRef.current) {
        storeRef.current = makeStore();
    }

    return (
        <Provider store={storeRef.current}>
            {children}
        </Provider>
    );
}

export default StoreProvider