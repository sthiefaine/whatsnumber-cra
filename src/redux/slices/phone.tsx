import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// import { current } from "@reduxjs/toolkit";

interface CountryInfosInterface {
  region: string;
  nativeName: string;
  name: string;
  flag: string;
  capital: string;
  callingCodes: string[];
  alpha3Code: string;
  alpha2Code: string;
}

interface PhoneState {
  phoneInput: string;
  countryInfos: CountryInfosInterface;
  phoneNumber: string;
}

let initialState = {
  phoneInput: "",
  countryInfos: {
    region: "Americas",
    nativeName: "United States",
    name: "United States of America",
    flag: "https://restcountries.eu/data/usa.svg",
    capital: "Washington, D.C.",
    callingCodes: ["1"],
    alpha3Code: "USA",
    alpha2Code: "US",
  },
  phoneNumber: "",
} as PhoneState;

export const phoneSlice = createSlice({
  name: "phone",
  initialState: initialState,

  reducers: {
    setCountry: (state, action: PayloadAction<CountryInfosInterface>) => {
      state.countryInfos = action.payload;
    },
    setPhoneInput: (state, action: PayloadAction<string>) => {
      state.phoneInput = action.payload;
    },
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
  },
});

export const { setCountry, setPhoneInput, setPhoneNumber } = phoneSlice.actions;

export default phoneSlice.reducer;

// The function below is called a thunk and allows us to perform async logic.
export const ExempleAsync = (value: any) => (dispatch: any) => {
  setTimeout(() => {
    dispatch();
  }, 1000);
};
