import { useState, useEffect } from "react";
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

  const [mockTasks, setMockTasks] = useState({});
  const [error, setError] = useState();

  async function getTasks() {
    await fetch("https://625e20a26c48e8761ba572c5.mockapi.io/api/v1/tasks", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => setMockTasks(json))
      .catch((err) => setError(err));
  }

  useEffect(() => {
    getTasks();
    
  }, []);
  
  if(mockTasks && mockTasks.length && mockTasks !== undefined > 0 ){
      mockTasks.map(item => {
        console.log(item)
      })
    }

  function closeModal(e: boolean) {
    return dispatch(utils.actions.setOpen(e));
  }

  return {
    todo,
    setTodo,
    addTask,
    Tasks,
    open,
    setOpen,
    isOpen,
    closeModal,
    mockTasks,
  };
};
