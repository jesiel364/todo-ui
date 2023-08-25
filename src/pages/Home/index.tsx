import { Wrapper, Card, Container, List } from "./Style";
import { ViewController } from "./viewController";
import {Link} from 'react-router-dom'

import Bell from '/src/assets/bell.svg'
import Header from '/src/components/Header/index'

function Home() {
  const viewController = ViewController();
  console.log(viewController.tasks);

  return (
        <Container>
   <Header
    title="Minhas tarefas"
    iconRight={Bell}
    avatar="https://mui.com/static/images/avatar/1.jpg"
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
  
    </Container>
    
  );
}

export default Home;
