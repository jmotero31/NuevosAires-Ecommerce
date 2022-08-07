import React from 'react'
import Item from '../Item'
import './styles.css'

const ItemList = ({productos}) => {
  
  return (
     <ul className='ItemListcontainer'> 
      {productos.map(prod=>{
      return <Item key={prod.idProducto} producto={prod}/>
      } )}
     </ul>
  )
}

export default ItemList