
import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../../Components/ItemList'
import './styles.css'
import useFirebaseProductos from '../../Components/Hooks/useFirebaseProductos'
import Loading from '../../Components/Loading'


const ItemsListContainer = ({greeting}) => {
  const [productosFire, cargando, erro] = useFirebaseProductos()
  const [productosFiltrados, setProductosFiltrados] = useState(productosFire)
  const parametro = useParams()
 
  const productos = productosFire
  console.log(erro)
 useEffect(() => {
  if (parametro?.categoryId){
    const filtrados = productos.filter(produc => produc.category === parametro.categoryId)
    setProductosFiltrados(filtrados)
  }else{
    setProductosFiltrados(productos)
  }
 }, [parametro, productos])
 

  return (
    <>
        {cargando !== true ?
          <ItemList productos={productosFiltrados}/> 
        :
        <div className='loadingContainer'>
          <Loading/>
        </div>
      }
    </>
    )
  }
  export default ItemsListContainer