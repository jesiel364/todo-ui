import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { AppDispatch } from "./store";

export interface Util {
  open: boolean;
}

const utils = createSlice({
  name: "utils",
  initialState: {
    open: false,
  } as Util,
  reducers: {
    isOpen: (state, action: PayloadAction<Util>) => {
      return state;
    },
    setOpen: (state, action: PayloadAction<boolean>) => {
      console.log(action.payload)
      return {
        ...state,
        open: action.payload,
      };
    },
  },
});

export default utils;
