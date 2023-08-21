import { Wrapper, Card, Header, Container, List } from "./Style";
import { ViewController } from "./viewController";
import { Avatar, TextField } from "@mui/material";
import Bell from '/src/assets/bell.svg'

function Home() {
  const viewController = ViewController();
  console.log(viewController.tasks);

  return (
    <>
        <Container>
    <Header>
        <div className="top">
        <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
        <img src={Bell} />
        </div>
   
    <p className="title">Minhas tarefas</p>
    </Header>


        <List>
            <div className="item">
                <p>Aprender fluxo UI</p>
                <span>2d</span>
            </div>
            <div className="item">
                <p>Treinar interfaces no figma</p>
                <span>7d</span>
            </div>

        </List>
  
    </Container>
    </>
  );
}

export default Home;
