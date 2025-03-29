import React from 'react'
import { useCart } from '../context/CartContext'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

const CartView = () => {
    const {cart, cartTotal, clear} = useCart()
  return (
    <div>
        <h2>Tu carrito</h2>

        <div>
            {cart.map((compra)=> <CartItem key={compra.id} compra={compra}/>)}
            <span>Total a pagar: ${cartTotal()},00</span>
        </div>
        <div  style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '2rem',
        }}>
        <button  className='btn btn-danger' onClick={clear}>Borrar  carrito</button>
        <Link className='btn btn-dark' to='/' >Seguir comprando</Link>
        <Link className='btn btn-dark' to='/checkout'>Terminar compra</Link>
        </div>
        
    </div>
  )
}

export default CartView