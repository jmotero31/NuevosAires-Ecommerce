import './styles.css'

const modal = ({children, isOpen, closeModal}) => {
    const handleModalContainerClick = e => e.stopPropagation()

  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
        <div className="modal-container" onClick={handleModalContainerClick}>
            <button className="modal-close buttondel" onClick={closeModal}>X</button> 
            {children}
        </div>
    </article>
  )
}

export default modal