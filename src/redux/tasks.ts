import { v4 as uuidv4 } from 'uuid';
import {createSlice, payloadAction} from "@reduxjs/toolkit"

export interface Task {
  id: string | number
  title?: string | any
  completed?: boolean | any
  body: string | any
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
    },
    addTodo: (state, action: PayloadAction<Task>) => {
      state.push({ id: uuidv4(), body: action.payload, completed: false });
      return state;
    }, 
  }
})

export default tasks