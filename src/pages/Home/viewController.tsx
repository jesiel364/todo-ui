import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState, AppDispatch } from "../../redux/store";
import utils from "../../redux/utils";
import tasks from "../../redux/tasks";

// interface TaskProps {
//     id: number | string
//     title: string
//     body: string
// }

export const ViewController = () => {
  const [open, setOpen] = useState(false);
  const [todo, setTodo] = useState<any>();
  const dispatch: AppDispatch = useDispatch();
  const Tasks = useSelector((state: AppState) => state.tasks);
  const isOpen = useSelector((state: AppState) => state.utils);

  console.log(isOpen);

  const addTask = (e: any) => {
    e.preventDefault();
    if (todo !== undefined && todo.length > 0) {
      dispatch(tasks.actions.addTodo(todo));
      setTodo("");
    }
  };

  function closeModal(e: boolean){
    return dispatch(utils.actions.setOpen(e))

  }

  return {
    todo,
    setTodo,
    addTask,
    Tasks,
    open,
    setOpen,
    isOpen,
    closeModal
  };
};
