import * as S from './style'
import Modal from "react-modal";
import {useState} from 'react'

interface ModalProps {
  open?: boolean;
  text?: string;
  data?: any;
}
const NewTaskModal: React.FC<ModalProps> = ({data}) =>{

  const [isOpen, setIsOpen] = useState(false)
  
  function closeModal(){
    setIsOpen(false)
  }
  
  return(
 
  <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        ariaHideApp={false}
        
     >
      <S.ModalWrapper>
     {data}
      </S.ModalWrapper>
     </Modal>
  
 
  
  )
}

export default NewTaskModal