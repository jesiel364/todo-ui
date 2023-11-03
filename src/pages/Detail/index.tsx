import {DetailContainer, Wrapper} from "./style"
import Header from '/src/components/Header/index'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useParams } from "react-router-dom";
import React from 'react'
import { useSelector, useDispatch } from "react-redux";

const Detail = () => {

const ref = React.useRef<HTMLDivElement>(null);
React.useEffect(() => {
    (ref.current as HTMLDivElement).ownerDocument.body.scrollTop = 0;
   
  },[] );
  
  
  
  const t = "Aprender fluxo UI"
  const {id} = useParams()
  
  const Tasks = useSelector((state: AppState) => state.tasks);
  
  const taskDetail = Tasks.filter((item) => item.id === id)[0]
  
  return (
  <DetailContainer >
  <Header
  customStyle={
    {
      paddingBottom: 32,
      backgroundColor: '#fff',
      boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.12)'
    }
  }
    title={taskDetail.title}
    icon_left_link="/"
    title_align="center"
    title_style={
      {
        fontSize: 18,
        fontWeight: 700,
        
      }
    }
  icon_left={
      <ArrowBackIcon
      
        sx={{
          color: "black"
        }}
      />
    
    
  }/>
  <Wrapper ref={ref}  >

     <p>{taskDetail.body}</p>
  
  </Wrapper>
 
  </DetailContainer>
  
  )
}

export default Detail