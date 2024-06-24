import { ReactNode, useRef } from "react";
import type { AppStore } from "../Store";
import { makeStore } from "../Store";
import { Provider } from "react-redux";
import { saveStateToLocalStorage } from "../../Storage";

interface StoreProviderProps {
    readonly children: ReactNode;
}

const StoreProvider = ({children}: StoreProviderProps) => {

    const storeRef = useRef<AppStore | null>(null);

    if (!storeRef.current) {
        storeRef.current = makeStore();
        storeRef.current.subscribe(() => {
            if(storeRef.current){
                console.log("Saving state to local storage");
                saveStateToLocalStorage({ messageCenter: { ...storeRef.current.getState().messageCenter, user_name: null} });
            }
                
        })
    }

    return (
        <Provider store={storeRef.current}>
            {children}
        </Provider>
    );
}

export default StoreProvider