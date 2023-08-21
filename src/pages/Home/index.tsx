import { Wrapper, Card, Container, List } from "./Style";
import { ViewController } from "./viewController";

import Bell from '/src/assets/bell.svg'
import Header from '/src/components/Header/index'

function Home() {
  const viewController = ViewController();
  console.log(viewController.tasks);

  return (
        <Container>
   <Header
    title="Minhas tarefas"
    img={Bell}
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
            <div key="task.id" className="item">
                <p>{task.body}</p>
                <span>2d</span>
            </div>
          ))
        }
          

        </List>
  
    </Container>
    
  );
}

export default Home;
