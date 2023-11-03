import { configureStore, combineReducers} from '@reduxjs/toolkit'
import tasks from './tasks'
import utils from './utils'

const rootRecucer = combineReducers({
  utils: utils.reducer,
  tasks: tasks.reducer,
  
})

const store = configureStore({
  reducer: rootRecucer
})

export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof rootRecucer>

export default store