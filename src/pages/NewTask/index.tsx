import * as S from "./style";
import { ArrowBack } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NewTask = () => {
  const navigate = useNavigate();

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

      <S.FormGroup>
        <p className="title">Nova Tarefa</p>
        <S.TitleInput placeholder="Nome da sua tarefa" />
        <p
          style={{
            marginTop: 16,
          }}
          className="title"
        >
          Descrição
        </p>
        <S.DescriptionInput placeholder="Descreva sua tarefa" />

        <p
          style={{
            marginTop: 16,
          }}
          className="title"
        >
          Data de Entrega
        </p>
        <S.DateInput placeholder="Selecione uma data" type="date"></S.DateInput>

        <Button
          sx={{
            marginTop: "16px",
            borderRadius: "10px",
            background: "#18B29A",
            color: "#FFF",

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
    </S.NewTaskContainer>
  );
};

export default NewTask;
