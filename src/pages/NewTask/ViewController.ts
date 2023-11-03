import {useState} from "react"
import { useSelector, useDispatch } from "react-redux";
import { AppState, AppDispatch } from "../../redux/store";
import utils from "../../redux/utils";
import tasks from "../../redux/tasks";



const AddTaskController = () => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [date, setDate] = useState("")
  
  const dispatch: AppDispatch = useDispatch();
  
  function handleSubmit(e:any){
    e.preventDefault()
    const todo = {
      title: title,
      body: body,
      date: date,
    }
    return dispatch(tasks.actions.addTodo(todo))
  }
  return{
    title,
    body,
    date,
    setTitle,
    setBody,
    setDate,
    handleSubmit
  }
}

export default AddTaskController