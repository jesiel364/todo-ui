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
       
          <div className="item">
                <p>Aprender fluxo UI</p>
                <span>2d</span>
            </div>
          
        
            <div className="item">
                <p>Treinar interfaces no figma</p>
                <span>7d</span>
            </div>
        
        {
          viewController.tasks.map(task => (
          <Link key="task.id" to={"detail/" + task.body}>
            <div  className="item">
                <p>{task.body}</p>
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
