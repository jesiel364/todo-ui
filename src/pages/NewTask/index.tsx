import * as S from "./style";
import { ArrowBack } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import viewController from "./ViewController";

const NewTask = () => {
  const navigate = useNavigate();

  const { title, body, date, setTitle, setBody, setDate, handleSubmit } = viewController();

  return (
    <S.NewTaskContainer>
      <S.Header>
        <IconButton
          onClick={() => navigate("/")}
          aria-label="icon"
          size="medium"
        >
          <ArrowBack
            sx={
              {
                // backgroundColor: "#eee",
              }
            }
          />
        </IconButton>
        <div className="center">
          {" "}
          <S.Title>Nova Tarefa</S.Title>
        </div>
      </S.Header>

      <S.FormGroup onSubmit={(e:any) => handleSubmit(e)}>
        <p className="title">Nova Tarefa</p>
        <S.TitleInput 
        onChange={(e) => setTitle(e.currentTarget.value)} 
        value={title}
        placeholder="Nome da sua tarefa" />
        <p
          style={{
            marginTop: 16,
          }}
          className="title"
        >
          Descrição
        </p>
        <S.DescriptionInput
        onChange={(e) => setBody(e.currentTarget.value)} 
        value={body}
        placeholder="Descreva sua tarefa" />

        <p
          style={{
            marginTop: 16,
          }}
          className="title"
        >
          Data de Entrega
        </p>
        <S.DateInput 
        onChange={(e) => setDate(e.currentTarget.value)} 
        value={date}
        placeholder="Selecione uma data" type="date"></S.DateInput>

        <Button
          onClick={(e:any) => handleSubmit(e)}
          sx={{
            borderRadius: "10px",
            background: "#18B29A",
            color: "#FFF",
            maxWidth: 160,
            margin: "auto",
            marginTop: "16px",

            fontFamily: "Montserrat",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "normal",
            "&:hover": {
              background: "#18B29c",
            },
          }}
        >
          Cadastrar
        </Button>
      </S.FormGroup>
      
    <p>{title}</p>
    <p>{body}</p>
    <p>{date}</p>
    </S.NewTaskContainer>
  );
};

export default NewTask;
