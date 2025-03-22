import React from 'react'
import { useCart } from '../context/CartContext'
import CartView from './CartView'
import EmptyCart from './EmptyCart'

const CartContainer = () => {
    const {cart} = useCart()
  return (
    <div>
        {
            cart.length ? <CartView/> : <EmptyCart/>
        }
    </div>
  )
}

export default CartContainer