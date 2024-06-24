import { RootState } from "@/Lib/Store";

export const STORAGE_KEY = "chat-app-data"

// Save state to localStorage
export const saveStateToLocalStorage = (state: RootState ) =>{
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem(STORAGE_KEY, serializedState);
    } catch (e) {
      console.warn('Could not save state', e);
    }
  }
  
  // Load state from localStorage
export const loadStateFromLocalStorage = (): RootState | undefined  => {
    try {
      const serializedState = localStorage.getItem(STORAGE_KEY);
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (e) {
      console.warn('Could not load state', e);
      return undefined;
    }
  }