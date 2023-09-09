import {createSlice, payloadAction} from "@reduxjs/toolkit"

export interface Util {
  id: string
  title: string
  completed: boolean
  loading: boolean
  isOpen: boolean
}

const utils = createSlice({
  name: 'utils',
  initialState: [{open: false}] as Util[],
  reducers: {
    isOpen: (state, action: payloadAction<boolean>, ) => {
      state = [{open: true}]
      return state
    },
    
  }
})

export default utils