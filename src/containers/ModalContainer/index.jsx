import { useModal } from '../../Components/Hooks/useModal'
import Modal from '../../Components/Modal/modal'
import ContactFrom from '../../contactForm/contactForm'

const ModalContainer = ({total, setCart, setConfirmar, volver}) => {
    const [isOpenModal1, openModal1, closeModal1] = useModal(true)
    console.log(openModal1)
    if(!isOpenModal1){
      setConfirmar(false)
    }
  
  return (
    <div>
        <Modal isOpen={isOpenModal1} closeModal={closeModal1}>    
            <ContactFrom total={total} closeModal1={closeModal1} setCart={setCart} volver={volver}></ContactFrom>
        </Modal>
    </div>
  )
}

export default ModalContainer