import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const { v4: uuidv4 } = require("uuid");

interface HistoryNumbers {
  id: string;
  historyPhoneNumber: string;
  name: string;
}

let initialState = {
  historyNumbers: [],
  historySearch: "",
};

export const historySlice = createSlice({
  name: "history",
  initialState: initialState,

  reducers: {
    addNumberToHistory: (state, action: PayloadAction<string>) => {
      state.historyNumbers = [
        {
          id: uuidv4(),
          date: Date.now(),
          number: action.payload,
          name: "",
        },
        ...state.historyNumbers,
      ] as any;
    },

    sethistorySearch: (state, action) => {
      state.historySearch = action.payload;
    },
  },
});

export const { addNumberToHistory, sethistorySearch } = historySlice.actions;

export default historySlice.reducer;
