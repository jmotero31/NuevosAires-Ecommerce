
import { useContext, useEffect } from 'react';
import { useForm } from '../Components/Hooks/useForm'
import pedido from '../firebase/pedido';
import './styles.css'
import { Shop } from '../../src/Contex/ShopContext'
import orden from '../firebase/orden';
import Loading from '../Components/Loading';

const initialForm = {
  name: "",
  email: "",
  emaildos: "",
  phone: "",
  address: "",
};

const validateForm = (form) =>{
  let errors={}
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
  let regexEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
  let regexaddress = /^.{1,255}$/

  if(!form.name){
    errors.name = "El campo 'Nombre' es requerido"
  }else if(!regexName.test(form.name)){
    errors.name ="El campo 'Nombre'  solo acepta letras y espacios en blanco"
  }else if(form.name.length < 4){
    errors.name = "El campo 'Nombre' debe tener más de dos letras"
  }

  if(!form.email){
    errors.email = "El campo 'Correo' es requerido"
  }else if(!regexEmail.test(form.email)){
    errors.email = "El campo 'Correo' es incorrecto"
  }
  
  if(form.email !== form.emaildos){
    errors.emaildos = "Verificar correos"
  }

  if(!form.phone){
    errors.phone = "El campo 'Telefono' es requerido"
    
  }else if(form.phone.length < 8){
    errors.phone = "El numero debe tener al menos 10 digitos"
    
  }

  if(!form.address){
    errors.address = "El campo 'Comentario' es requerido"
  }else if(!regexaddress.test(form.address)){
    errors.address = "El campo 'Dirección' no debe exceder los 255 cararteres"
  }

  return errors
}


const ContactFrom = ({total, closeModal1, setCart, volver}) => {
  const {form, 
    errors,
    loading,
    handleChange,
    handleBlur,
    handleSubmit,
    // setLoading
    } = useForm(initialForm, validateForm)
    
  const {cart} = useContext(Shop)
  
    
  useEffect(() => {
      if(loading){
        const pedidoConfirmado = pedido(form, cart, total)
        orden({cart, pedidoConfirmado, closeModal1, setCart, volver, form})
      }
  }, [loading])

 
  return (
    <>
        <h3 className='h'>Datos personales</h3>
        <br />
        <form onSubmit={handleSubmit} className='formulario'>
          <label className='labe'>Nombre y Apellido</label>
            <input 
            className='ingreso'
            type="text" 
            name="name"  
            placeholder="Escribe tu nombre" 
            onBlur={handleBlur} 
            onChange={handleChange} 
            value={form.name} 
            required
            />
            {errors.name && <text className='validacion'>{errors.name}</text>}
            <label className='labe'>Email</label>
            <input 
            className='ingreso'
            type="email" 
            name="email"  
            placeholder="Escribe tu correo" 
            onBlur={handleBlur} 
            onChange={handleChange} 
            value={form.email} 
            required
            />
            {errors.email && <text className='validacion'>{errors.email}</text>}
            <label className='labe'>Repetir Email</label>
            <input 
            className='ingreso'
            type="email" 
            name="emaildos"  
            placeholder="Vuelva a escribir su 'Correo'" 
            onBlur={handleBlur} 
            onChange={handleChange} 
            value={form.emaildos} 
            required
            />
            {errors.emaildos && <text className='validacion'>{errors.emaildos}</text>}
            <label className='labe'>Telefono de Contacto</label>
            <input 
            className='ingreso'
            type="number" 
            name="phone"  
            placeholder="xxx-xxxxxxx" 
            onBlur={handleBlur} 
            onChange={handleChange} 
            value={form.phone} 
            required
            />
            {errors.phone && <text className='validacion'>{errors.phone}</text>}
            <label className='labe'>Dirección / Número / Depto / Detalles</label>
            <textarea 
            className='ingreso'
            type="text" 
            name="address" 
            cols="50"
            rows="3"
            placeholder="Complete según la referencia" 
            onBlur={handleBlur} 
            onChange={handleChange} 
            value = {form.address}
            required
            />
            {errors.address && <text className='validacion'>{errors.address}</text>}
            {loading?(
                <div className="iu"><Loading/></div>
                )
                :
                (<div className="iu"><button className='buttonAddCart'>Terminar</button></div>)
              }
        </form>
    </>
  )
}

export default ContactFrom