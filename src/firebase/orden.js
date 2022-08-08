import { addDoc, collection, doc, getDoc, writeBatch} from "firebase/firestore"
import swal from 'sweetalert'
import { db } from "../firebase/config"
import { helpHttp } from "../utils/helpHttp"


const orden = ({cart, pedidoConfirmado, closeModal1, setCart, volver, form}) => {

    
    //Primer paso: abrir un batch
    const batch = writeBatch(db)
    
    //Array auxiliar que me define si hay productos fuera de stock
    const outOfStock = []
    
    //Chequear el stock del producto en nuestra db y restarlo a la cantidad, si corresponde
    cart.forEach((productoEnCart) => {
        getDoc(doc(db, 'productos', productoEnCart.id))
        .then(async (documentSnapshot) => {
            //Generamos los datos del producto en tiempo real. Obtenemos el stock justo antes de guardar.
            const producto = {...documentSnapshot.data(), id: documentSnapshot.id};
            //Hacemos un update en caso que el stock supere a la cantidad.
            

            if (producto.stock >= productoEnCart.cant) {
                batch.update(doc(db, 'productos', producto.id) ,{
                    stock: producto.stock - productoEnCart.cant
                })
            } else {
                outOfStock.push(producto)
            }
    
            if (outOfStock.length === 0) {
                addDoc(collection(db, 'ordenes'), pedidoConfirmado).then(({ id }) => {

                    // enviar correo con todos los datos de registro
                    let correo = {...pedidoConfirmado.buyer, NumeroPedido: id, Detalle: "Detalle del pedido"}
                    let i = 1
                     pedidoConfirmado.items.map(  
                         prod =>{
                             correo = {...correo, [`item_${i}`]: (i), [`Cantidad_${i}`]: prod.cant, [`Producto_${i}`]: prod.title}
                             i=i+1
                             return{}
                         } 
                    )
                    correo = {...correo, Total: pedidoConfirmado.total}
                    //Recién hacemos el commit una vez que se genera la order
                    batch.commit().then(() => {
                        setTimeout(() => {
                            swal(`${form.name} - Pedido Confirmado`,"Pedido N°:  " + id, "success");
                            closeModal1()
                            setCart([])
                        }, 5000);

                        helpHttp()
                        .post("https://formsubmit.co/ajax/27dd62809e195af015f4dc7d1783b61e", {
                            body: correo,
                            headers:{
                                "Content-Type": "application/json",
                                Accept: "application/json", 
                            },
                        },)
                        .then(res=>{
                            setTimeout(() => {
                                swal("Orden Enviada" ,"Hemos recibido su pedido", "success");
                                volver()
                            }, 8000); 
                        })
                        .catch(error =>{
                            swal("Orden NO Enviada","Por favor Comunicate al XXX-XXXXXXX. Informanos el N° de pedido" + id , "error");
                            volver()
                        })
                    })
                }).catch((err) => {
                    console.log(`Error: ${err.message}`);
                })
                
                
            //Si tenemos productos fuera de stock al momento de generar la order avisamos al usuario
            } else {
                let mensaje = ''
                for (const producto of outOfStock) {
                    mensaje += `${producto.title}`
                } 

                let faltante = {Detalle: "PRODUCTOS FALTANTES"}
                let j = 1
                outOfStock.map(  
                         prod =>{
                            faltante = {...faltante, [`item_${j}`]: (j), [`Producto_${j}`]: prod.title}
                             j=j+1
                             return{}
                         } 
                    )
                swal(`${form.name} - No pudimos Procesar el Pedido`, `Productos fuera de stock:  ${mensaje}.`,"error")

                helpHttp()
                .post("https://formsubmit.co/ajax/27dd62809e195af015f4dc7d1783b61e", {
                    body: faltante,
                    headers:{
                        "Content-Type": "application/json",
                        Accept: "application/json", 
                    },
                },)
                .then(res=>{
                    setTimeout(() => {
                        swal("Disculpe las molestias", "Hemos Informado el faltante", "warning");
                        volver()
                    }, 8000);
                })
                .catch(error =>{

                })
                closeModal1()
                setCart([])

            }
        })
    })
}

export default orden;