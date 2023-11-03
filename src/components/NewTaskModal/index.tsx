import * as S from './style'
import Modal from "react-modal";
import {useState, useEffect} from 'react'
import { AppDispatch, AppState } from '../../redux/store';
import { useSelector, useDispatch} from 'react-redux'
import utils from '../../redux/utils';

interface ModalProps {
  open: boolean;
  setIsOpen: any
  text?: string;
  data?: any;
}
const NewTaskModal = ({data, open, setIsOpen, text}:ModalProps) =>{

  const dispatch: AppDispatch = useDispatch()
  const isOpen = useSelector((state: AppState) => state.utils);


  // const setState = (e: boolean) => {
  //   // e.preventDefault()
  //   dispatch(utils.actions.setIsOpen(e))

  // }

// useEffect(() => {
//   setState(false)
// })

  

  console.log(isOpen)
  
  
  return(
 
  <Modal
        isOpen={open}
        onRequestClose={(e) => setIsOpen(e)}
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