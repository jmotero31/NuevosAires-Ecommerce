import React from 'react'
import { useState } from 'react'
import './styles.css'
import swal from 'sweetalert'

const ItemCount = ({agregar, stock}) => {
const [contar, setContar] = useState(1) //hook estados guardados
 

    function sumar() {
    contar < stock ? setContar(contar + 1) : swal("Importante", "Stock disponible:  " + stock, "info")
  }
    const restar =()=>{
      contar > 1 ? setContar(contar - 1): swal("Importante", "Compra mínima es 1", "warning") 
    }
    const resetear = ()=>{
      setContar(1)
    }
    
    const confirmar = () =>{
      if(contar <= stock){
        agregar(contar)
      }
      else{
        if(stock !== 0){
          swal("Importante", "Tenemos en stock:  " + stock, "info")
        }else{
          swal("Lo Sentimos","Por el momento No tenemos en Stock","info")
        }
      }
    }
  return (
    <>
    <div className="containerItemCount">
        <button onClick={restar} className='buttonCount'>-</button>
        <span className="numberCount">{contar}</span>
        <button onClick={sumar} className='buttonCount'>+</button>
     </div>
        <button onClick={()=>{confirmar(); resetear()}} className="buttonAddCart buttonAddCart1">Agregar al Carrito</button>
        {/* <button onClick={resetear} className="buttonAddCart">Resetear</button> */}
    </> 
  )
}

export default ItemCount