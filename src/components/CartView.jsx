import React from 'react'
import { useCart } from '../context/CartContext'

const CartView = () => {
    const {cart, removeItem, clear} = useCart()
  return (
    <div>
        <h2>Tu carrito</h2>

        <div>
            {cart.map((compra)=> <div key={compra.id}>
                <p>{compra.name}</p>
                <p>{compra.quantity}</p>
                <p>{compra.price}</p>
                <button className='btn btn-danger' onClick={()=>removeItem(compra.id)}>X</button>
            </div>)}
        <button onClick={clear}>Borrar  carrito</button>
        </div>
        <button>Seguir comprando</button>
        <button>Terminar compra</button>
    </div>
  )
}

export default CartView