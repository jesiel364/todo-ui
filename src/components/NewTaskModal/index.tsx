import * as S from "./style";
import Modal from "react-modal";

interface ModalProps {
  open: boolean;
  setIsOpen: any;
  text?: string;
  data?: any;
}
const NewTaskModal = ({ data, open, setIsOpen, text }: ModalProps) => {
  return (
   <>
   <S.ModalWrapper>
      <Modal
        isOpen={open}
        onRequestClose={(e) => setIsOpen(e)}
        ariaHideApp={true}
        className='modal'
      >
         
        {data}

        <p>jhdjfghifjng flidjgi</p>
     

      </Modal>
      </S.ModalWrapper>
      </>
  );
};

export default NewTaskModal;
