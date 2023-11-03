import { Wrapper, Card, Container, List } from "./Style";
import { ViewController } from "./viewController";
import { Link } from "react-router-dom";
import NewTaskModal from "../../components/NewTaskModal";
import Bell from "/src/assets/bell.svg";
import Header from "../../components/Header";
import {useNavigate} from "react-router-dom"

function Home() {
  const { Tasks, todo, setTodo, addTask, open, setOpen, isOpen, closeModal, mockTasks} =  ViewController();
  
  const navigate = useNavigate()

  return (
    <Container>
      <Header
        title="Minhas tarefas"
        iconRight={Bell}
        avatar="https://mui.com/static/images/avatar/1.jpg"
        left_icon_click={ navigate("/")}
      />

      <List>
        <NewTaskModal
          open={isOpen.open}
          setIsOpen={(e: boolean) => closeModal(false)}
          data={
            <>
              <p>New</p>
            </>
          }
        />
      

        {Tasks && Tasks !== 0 && Tasks.length > 0?( Tasks.map((task) => (
          <Link key={task.id} to={"detail/" + task.id}>
            <div className="item">
              <p>
                {task.body.length > 10 ? task.body.substring(0, 34) : task.body}
              </p>
              <span>2d</span>
            </div>
          </Link>
        ))) : null}
      </List>
      
      

    </Container>
  );
}

export default Home;
