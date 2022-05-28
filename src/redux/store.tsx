import { configureStore } from "@reduxjs/toolkit";

// Slices List
import phone from "./slices/phone";
import history from "./slices/history";

// READ: https://redux.js.org/recipes/configuring-your-store
const reducer = {
  phone: phone,
  history: history,
};

// Pass in Redux store's state to save it to the user's browser local storage
const saveStorageData = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("whatsNumber", serializedState);
  } catch {
    // We'll just ignore write errors
  }
};

// Loads the state and returns an object that can be provided as the
// preloadedState parameter of store.js's call to configureStore
const getStorageData = () => {
  try {
    const serializedState = localStorage.getItem("whatsNumber");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

const preloadedState = getStorageData();

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
  preloadedState: preloadedState,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;

// We'll subscribe to state changes, saving the store's state to the browser's
// local storage. We'll throttle this to prevent excessive work.
store.subscribe(() => {
  setTimeout(() => {
    saveStorageData({
      phone: store.getState().phone,
      history: store.getState().history,
    });
  }, 1000);
});
