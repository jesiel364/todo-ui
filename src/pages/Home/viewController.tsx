import { useState } from "react"
import { useSelector, useDispatch} from 'react-redux'
import {AppState, AppDispatch } from '../../redux/store'
// import utils from '../../redux/store'
import tasks from '../../redux/tasks'

// interface TaskProps {
//     id: number | string
//     title: string
//     body: string
// }

export const ViewController = () =>{
    const [open, setOpen] = useState(false)
    const [todo, setTodo] = useState<any>()
  const dispatch: AppDispatch = useDispatch()
  const Tasks = useSelector((state: AppState) => state.tasks);
  
  const addTask = (e: any) => {
    e.preventDefault()
    dispatch(tasks.actions.addTodo(todo))
    setTodo("")
  }
 
   
  
  
  
    return {
        todo,
        setTodo,
        addTask, 
        Tasks,
        open,
        setOpen
    }
}