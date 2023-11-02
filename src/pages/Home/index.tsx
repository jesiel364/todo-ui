import { Wrapper, Card, Container, List } from "./Style";
import { ViewController } from "./viewController";
import {Link} from 'react-router-dom'
import NewTaskModal from "../../components/NewTaskModal";
import Bell from '/src/assets/bell.svg'
import Header from "../../components/Header";

function Home() {
  const viewController = ViewController();
  console.log(viewController.tarefas);

  return (
        <Container>
   <Header
    title="Minhas tarefas"
    iconRight={Bell}
    avatar="https://mui.com/static/images/avatar/1.jpg"
   />
   
<NewTaskModal
  data={<p>New</p>}
/>
        
        <List>
     
        
        {
          viewController.tarefas.map(task => (
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
        
        {JSON.stringify(viewController.isOpen)}
       <button onClick={e => viewController.utils.actions.isOpen()} >teste</button>
  
    </Container>
    
  );
}

export default Home;
