import React, {createContext, useState } from 'react'

export const Shop = createContext()  //hook de reack - dinamico

const ShopProvider = ({children}) => {

    const [estadoA, setEstadoA] = useState("Valor por defecto")
    const [cart, setCart] = useState([])

const agregarProducto = (producto, cantidad) => {

  const repetido = buscar(producto)

  if(repetido){
      repetido.cant += cantidad
      setCart([...cart])
    }else{
      setCart([...cart, {...producto, cant: cantidad}])
    }
}

 const buscar = (producto) => {
  return cart.find(valor => valor.id === producto.id)
 }

 const remover = (id) =>{
  const productosFiltrados = cart.filter(producto => producto.id !== id)
  setCart(productosFiltrados);
 }

  return (
    <Shop.Provider value ={{estadoA, setEstadoA, agregarProducto, cart, remover, setCart }}> 
        {children}
    </Shop.Provider>
  )
}

export default ShopProvider