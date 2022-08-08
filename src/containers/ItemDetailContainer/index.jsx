import { doc, getDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemsDetail from '../../Components/ItemDetail'
import { db } from '../../firebase/config'


const ItemDetailContainer = () => {
    const[detalle, setDetalle] = useState({})
    const parametro = useParams() //hook para captar parametros de las barra de navegación
    

    useEffect(() => {
      const getData = async () =>{
        try {
            const docRef = doc(db, "productos", parametro.productId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const data = {id: docSnap.id, ...docSnap.data()}
                setDetalle(data)
              } else {
              }
        } catch (error) {
            console.log(error)
        }
      }
      getData();
    },[parametro])

  return (
    <>
      <ItemsDetail producto={detalle}/>
    </>
  )
}

export default ItemDetailContainer