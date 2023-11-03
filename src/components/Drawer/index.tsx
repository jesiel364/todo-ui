import Drawer from "@mui/joy/Drawer";
import * as S from "./style";
import { AppDispatch, AppState } from "../../redux/store";
import utils from "../../redux/utils";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Divider } from "@mui/material";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionGroup from "@mui/joy/AccordionGroup";
import AccordionSummary from "@mui/joy/AccordionSummary";
import { ContentPasteOutlined } from "@mui/icons-material";

interface SideMenuProps {
  children?: any;
}

const SideMenu = ({}: SideMenuProps) => {
  const dispatch: AppDispatch = useDispatch();
  const isOpen = useSelector((state: AppState) => state.utils);

  return (
    <Drawer
    
      open={isOpen.open}
      onClose={() => dispatch(utils.actions.setOpen(false))}
    >
      <S.DrawerContainer>
        <S.TopBox>
          <Avatar
            alt="Demy Sharp"
            style={{
              height: 76,
              width: 76,
            }}
            src={"htps://mui.com/static/images/avatar/1.jpg"}
          />
          <p className="user_name">John Doe</p>
          <p className="total_tasks">7 tarefas</p>
        </S.TopBox>
        <Divider />

        <S.Accordion>
          <AccordionGroup sx={{ 
            maxWidth: 400,
            justifyContent: 'center',
            color: '#fff',
            '&::hover': {
                background: 'red'
            }
             }}>
            <Accordion className='accordion-item'>
              <AccordionSummary sx={{
                color: '#fff'
              }} className='summary'><ContentPasteOutlined /> Tarefas</AccordionSummary>
              <AccordionDetails>
                
                    <div className='childs'>Concluidas</div>
                    <div className='childs'>Em andamento</div>
                    <div className='childs'>Excluidas</div>
                    

              </AccordionDetails>
            </Accordion>
           
  
          </AccordionGroup>
        </S.Accordion>
      </S.DrawerContainer>
    </Drawer>
  );
};

export default SideMenu;
