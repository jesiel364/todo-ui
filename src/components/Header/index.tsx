import {HeaderStyle} from './Style'
import Bell from '/src/assets/bell.svg'
import { Avatar, TextField } from "@mui/material";

interface customProps {
  title?: string 
  img?: string
  avatar?: string
}

 const Header = (props: customProps ) => {
  const {title, img, avatar, ...other} = props
  
  return (
  
  <HeaderStyle>
        <div className="top">
        <Avatar alt="Remy Sharp" src={avatar} />
        <img src={img} />
        </div>
   
    <p className="title">{title}</p>
    </HeaderStyle>
    
  )
}

export default Header