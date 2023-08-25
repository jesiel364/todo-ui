import {v4 as uuidv4} from 'uuid/v4'
import {createSlice, payloadAction} from "@reduxjs/toolkit"

export interface Task {
  id: string
  title: string
  completed: boolean
}

const tasks = createSlice({
  name: 'tasks',
  initialState: [ {
        id: 1,
        title: 'This is an test',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quam quas, officiis tempore fuga ab perspiciatis fugiat doloribus, perferendis consectetur porro, aut placeat asperiores dicta facilis libero in corporis magnam!'
    },] as Task[],
  reducers: {
    todos: (state, action: payloadAction<string>, ) => {
      return state
    }
  }
})

export default tasks