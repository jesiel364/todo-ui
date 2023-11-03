import {createSlice, PayloadAction} from "@reduxjs/toolkit"


export interface Util {
  isOpen: boolean
}

let op = false


const utils = createSlice({
  name: 'utils',
  initialState: {
    isOpen: op
  } as Util,
  reducers: {
    isOpen: (state, action: PayloadAction<any>, ) => {

      return state
    },
    setIsOpen: (state, action: PayloadAction<any> ) =>{
      state: action.payload
      return state
    }
}
})

export default utils