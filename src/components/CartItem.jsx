import React from 'react'
import { useCart } from '../context/CartContext'

const CartItem = ({compra}) => {
    const {removeItem} = useCart()

    // const deleteItem = () =>{
    //     removeItem(compra.id)
    // }
  return (
    <div  style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%', padding:'2rem' }}>
        <img src={compra.img} alt={compra.name} style={{width:'9rem'}}/>
        <span>{compra.name}</span>
        <span>{compra.quantity}</span>
        <span>${compra.price},00</span>
        <span>precio final: ${compra.quantity * compra.price},00</span>
        <button className='btn btn-danger' onClick={()=>removeItem(compra.id)}>X</button>
        {/* <button className='btn btn-danger' onClick={deleteItem}>X</button> */}
    </div>
  )
}

export default CartItem