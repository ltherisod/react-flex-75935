import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import { addDoc, collection, doc, getDoc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { db } from '../service/firebase'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const CheckoutReactHookForm = () => {
   
    const [orderId, setOrderId] = useState('')
    const {cart, cartTotal, clear} = useCart()
    const {register, handleSubmit, formState:{errors}, getValues}= useForm()

    console.log(errors, 'errores')
    const finalizarCompra = (dataDelForm) => {
        console.log(dataDelForm, 'data form')
      
        
            let order = {
                comprador:{
                    name: dataDelForm.name,
                    lastname:dataDelForm.lastname,
                    address: dataDelForm.address,
                    email: dataDelForm.email,
                },
                compras:cart,
                total:cartTotal(),
                date:serverTimestamp()
               }
        
               const ventas = collection(db, "orders")
               //agregar un doc 
               addDoc(ventas,order)
               .then((res)=>{
                //actualizar el stock
                //OPCIONAL
                cart.forEach((item)=> {
                    const docRef = doc(db, "productos", item.id)
                    //traer el doc
                    getDoc(docRef)
                    .then((dbDoc)=> {
                        updateDoc(docRef, {stock:dbDoc.data().stock - item.quantity})
                    })
                    .catch((error)=> console.log(error))
                })
                setOrderId(res.id)
                clear()
               })
               .catch((error)=> console.loc(error))
        
       
    }

  return (
    <>
    {
        orderId ? <div>
            <h2>Compra realizada!</h2>
            <h4>Su id es: {orderId}</h4>
            <Link className='btn btn-dark' to='/'>Volver a Home</Link>
        </div>
        :<div>
        <h1>Complete con sus datos</h1>
        <form onSubmit={handleSubmit(finalizarCompra)}>
            <input className='form-control' type="text" name='name' placeholder='Ingrese su nombre'{...register("name", {required:true, minLength:3})} />
            {errors?.name?.type === "required" && <span style={{color:'red'}}>Por favor complete el campo Nombre</span>}
            {errors?.name?.type === "minLength" && <span style={{color:'red'}}>El nombre debe contener minimo 3 caracteres</span>}
            <input className='form-control' type="text" name='lastname' placeholder='Ingrese su apellido' {...register("lastname", {required:true, minLength:2})}/>
            {errors?.lastname?.type === "required" && <span style={{color:'red'}}>Por favor complete el campo Apellido</span>}
            {errors?.lastname?.type === "minLength" && <span style={{color:'red'}}>El apellido debe contener minimo 2 caracteres</span>}
            <input className='form-control' type="text" name='address' placeholder='Ingrese su direccion' {...register("address", {required:true, minLength:10, maxLength:35})} />
            {errors?.address?.type === "required" && <span style={{color:'red'}}>Por favor complete el campo Direccion</span>}
            {errors?.address?.type === "minLength" && <span style={{color:'red'}}>La direccion debe contener minimo 10 caracteres</span>}
            {errors?.address?.type === "maxLength" && <span style={{color:'red'}}>La direccion es demasiado larga</span>}
            <input className='form-control' type="email" name='email' placeholder='Ingrese su correo'{...register("email", {required:true})} />
            {errors?.email?.type === "required" && <span style={{color:'red'}}>Por favor complete el campo </span>}
            <input className='form-control' type="email" name='second-name' placeholder='Repita su correo' {...register("secondemail", {required:true, validate:{equalsMails: mail2 => mail2 === getValues().email}})}/>
            {errors?.secondemail?.type === "required" && <span style={{color:'red'}}>Por favor complete el campo </span>}
            {errors?.secondemail?.type === "equalsMails" && <span style={{color:'red'}}>Los mails deben ser iguales </span>}
            <button className='btn btn-success' type='submit' disabled={!cart.length}> Enviar</button>
        </form>
    </div>
    }
    </>
  )
}

export default CheckoutReactHookForm