import { collection, getDocs, query } from 'firebase/firestore';
import { useEffect } from 'react'
import { useState } from 'react';
import { db } from '../../firebase/config';

const useFirebaseProductos = () => {
    const [productosFire, setProductosFire] = useState([])
    const[cargando, setCargando] = useState(false)
    const[erro, setErro] = useState(null)
    

    useEffect(() => {
        (async()=>{
            try {
                setCargando(true)
                const q = query(collection(db, "productos"));
                const querySnapshot = await getDocs(q);
                const datos = []
                querySnapshot.forEach((doc) => {
                    datos.push({id: doc.id, ...doc.data()})
                })
                setProductosFire(datos)
                setCargando(false)
                
            } catch (error) {
                setErro(error)
            }
        })()
    }, [])
    
  return [productosFire, cargando, erro]
}

export default useFirebaseProductos