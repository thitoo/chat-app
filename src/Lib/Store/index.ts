import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { messageSlice } from "../Slices/MessageSlice";


const rootReducer = combineSlices(messageSlice)

export const makeStore = () => {
    return configureStore({
        reducer: {
           
        }
    })
}

export type RootState = ReturnType<typeof rootReducer>

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];
