import { MessageState } from "@/Lib/Slices/ChatRoomSlice";
import { RootState } from "@/Lib/Store";


// Save state to localStorage
export const saveStateToLocalStorage = (state: RootState ) =>{
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('chat-app-data', serializedState);
    } catch (e) {
      console.warn('Could not save state', e);
    }
  }
  
  // Load state from localStorage
export const loadStateFromLocalStorage = (): RootState | undefined  => {
    try {
      const serializedState = localStorage.getItem('chat-app-data');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (e) {
      console.warn('Could not load state', e);
      return undefined;
    }
  }