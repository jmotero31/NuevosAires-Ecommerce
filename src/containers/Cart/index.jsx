import React, { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Shop } from '../../Contex/ShopContext'
import './styles.css'
import ModalContainer from '../ModalContainer'
import swal from 'sweetalert'

const Cart = () => {
  const {cart} = useContext(Shop)
  const {remover} = useContext(Shop)
  const {setCart} = useContext(Shop)
  const[total, setTotal] = useState(0)
  const [confirmar, setConfirmar] = useState(false)

  const navigate = useNavigate()
  
  const vaciar = ()=>{
    swal({
      title: "¿Estás Seguro?",
      text: "Desea vaciar el Carrito de compras",
      icon: "warning",
      // buttons: true,
      dangerMode: true,
      buttons: ["No", "Si"],
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("¡Su Carrito fue Vaciado!", {
          icon: "success",
        });
        setCart([])
      } else {
        swal("¡Siga disfrutando de su compra!");
      }
    });
  }
 
  useEffect(() => {
    setTotal(cart.reduce( (acumulador, producto) => acumulador = (producto.price) * (producto.cant) + acumulador, 0 ))
  }, [cart])

  const volver =()=>{
    navigate('/')
  }

  const confirmo = () =>{
   setConfirmar(true)
  }

  return (
      <div className='e'>
        {cart.length !== 0?
            <>
            <table striped bordered hover className='i'>
            <thead className='o'>
              <tr>
                <th>Producto</th>
                <th></th>
                <th>Cant</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <br></br>
            <tbody>
            {cart.map(prod => {
              return <tr key={prod.id} className='aa'>
                <td ><img src={prod.image} style={{ width: '60px', height: '60px', padding: '0.1rem'}} alt={prod.title}></img></td>
                <td>{prod.title}</td>
                <td>{prod.cant}</td>
                <td>$ {prod.cant * prod.price}</td>
                <td><button onClick={() => remover(prod.id)} className="buttondel"> X </button></td>

              </tr>
            })
            }
            </tbody>
            <br /><br />
            <tfoot>
              <tr className='u'>
                <td>TOTAL</td>
                <td></td>
                <td>$</td>
                <td>{total}</td>
                <td></td>
              </tr>
            </tfoot>
            </table>
            <button onClick={()=>{confirmo()}} className="buttonAddCart">Comprar</button>
            <button onClick={vaciar} className="buttonAddCart">Vaciar</button>
            {confirmar && <ModalContainer total={total} setCart={setCart} setConfirmar={setConfirmar} volver={volver} />}
            <h2 className='car' onClick={volver}>Seguir comprando</h2>
          
            </>
          :
          <>
          <h2 className='caar'>Seguir comprando</h2>
          <button onClick={volver} className="buttonAddCart">Volver</button>
          </>
        }
      </div>
  )
}

export default Cart
