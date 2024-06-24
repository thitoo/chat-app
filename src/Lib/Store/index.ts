import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { chatRoomSlice } from "../Slices/ChatRoomSlice";


const rootReducer = combineSlices(chatRoomSlice)

export const makeStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];
