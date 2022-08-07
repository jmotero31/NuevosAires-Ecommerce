import { useState } from "react"

export const useForm = (initialForm, validateForm) => {
    const[form, setForm]= useState(initialForm)
    const [errors, setErros] = useState({})
    const [loading, setLoading] = useState(false)
    
    //cambio de valores
  
    const handleChange = (e) =>{
        const{name, value} = e.target
        setForm({
            ...form,
            [name]: value,
        })
    }

    const handleBlur = (e) =>{
        handleChange(e)
        setErros(validateForm(form))
    }

    const handleSubmit = (e) =>{
        
        e.preventDefault()
        setErros(validateForm(form))
        
        if(Object.keys(errors).length === 0){
            setLoading(true)
        }else{
            return
        }
    }

    return{
        form,
        errors,
        loading,
        handleChange,
        handleBlur,
        handleSubmit,
        setLoading,
    }

}