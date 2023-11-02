import {createSlice, PayloadAction} from "@reduxjs/toolkit"

export interface Util {
  loading: boolean
  isOpen: boolean
}

const utils = createSlice({
  name: 'utils',
  initialState: true,
  reducers: {
    isOpen: (state, action: PayloadAction<any>, ) => {

      return state
    },
    setIsOpen: (state, action: PayloadAction<any>,) => {
      state: action.payload
    }
    
  }
})

export default utils