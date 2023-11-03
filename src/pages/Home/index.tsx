import { Wrapper, Card, Container, List } from "./Style";
import { ViewController } from "./viewController";
import {Link} from 'react-router-dom'
import NewTaskModal from "../../components/NewTaskModal";
import Bell from '/src/assets/bell.svg'
import Header from "../../components/Header";

function Home() {
  const {Tasks, todo, setTodo, addTask, open, setOpen, isOpen} = ViewController();
  console.log(Tasks);
  
  

  return (
        <Container>
   <Header
    title="Minhas tarefas"
    iconRight={Bell}
    avatar="https://mui.com/static/images/avatar/1.jpg"
   />

   


        
        <List>
        <NewTaskModal
  open={open}
  setIsOpen={(e:boolean) => setOpen(e)}
  data={
    <>
  <p>New</p>

  </>
  }
/>
          <form onSubmit={(e) => addTask(e)}>
        <input 
        
        value={todo}
        style={{
          marginTop: 16
        }} onChange={(e) => setTodo(e.currentTarget.value)} />

        <button >Enviar</button>
        </form>
        
        {
        Tasks.map(task => (
          <Link key="task.id" to={"detail/" + task.body}>
          
          
            <div  className="item">
              
                <p>{
                task.body.length > 10 ? task.body.substring(0,34) : task.body
                  
                }</p>
                <span>2d</span>
            </div>
            </Link>
          ))
        }
          

        </List>
        
        {JSON.stringify(isOpen)}
       {/* <button onClick={e => viewController.utils.actions.isOpen()} >teste</button> */}
  
    </Container>
    
  );
}

export default Home;
