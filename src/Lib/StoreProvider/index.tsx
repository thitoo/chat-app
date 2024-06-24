import { ReactNode, useRef } from "react";
import type { AppStore } from "../Store";
import { makeStore } from "../Store";
import { Provider } from "react-redux";
import { saveStateToLocalStorage } from "../../Storage";
import { broadcast } from "../Broadcast";

interface StoreProviderProps {
    readonly children: ReactNode;
}

const StoreProvider = ({children}: StoreProviderProps) => {

    const storeRef = useRef<AppStore | null>(null);

    broadcast.onmessage = (event) => {
        console.log('broadcast message received', event.data);
        if(storeRef.current){
            storeRef.current.dispatch({type: 'messageCenter/loadState', payload: event.data});
        }
    }


    if (!storeRef.current) {
        storeRef.current = makeStore();
        storeRef.current.subscribe(() => {
            if(storeRef.current){
                 saveStateToLocalStorage({ messageCenter: { ...storeRef.current.getState().messageCenter} });
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