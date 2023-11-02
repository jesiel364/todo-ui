import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid';

export interface Task {
  id: string | number
  title?: string | any
  completed?: boolean | any
  body: string | any
}

const tasks = createSlice({
  name: 'tasks',
  initialState: [
    //  {
    //     id: 1,
    //     title: 'This is an test',
    //     body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quam quas, officiis tempore fuga ab perspiciatis fugiat doloribus, perferendis consectetur porro, aut placeat asperiores dicta facilis libero in corporis magnam!'
    // },
  ] as Task[],
  reducers: {
    todos: (state, action: PayloadAction<Task>, ) => {
      return state
    },
    addTodo: (state, action: PayloadAction<any>) => {
      state.push({ id: uuidv4(), body: action.payload, completed: false });
      return state;
    }, 
  }
})

export default tasks