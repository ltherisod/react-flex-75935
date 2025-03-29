import React, { useContext, useState } from 'react'
import ItemCounter from './ItemCounter'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({product}) => {
  const {addToCart} = useContext(CartContext)
  const [purchase, setPurchase] = useState(false)
  
  const onAdd = (quantity) => {
    addToCart(product, quantity)
    setPurchase(true)
  }

  return (
    <div>
        <h1>Detalle del producto : {product.name}</h1>
        <img src={product.img}  alt={product.name}/>
        <p>{product.description}</p>
        <p>Stock: {product.stock} unidades</p>
        <p>Precio: ${product.price},00</p>
        {purchase 
        ? <div 
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '2rem',
        }}>
          <Link className='btn btn-dark' to='/'>Seguir comprando</Link>
          <Link className='btn btn-dark' to='/cart'>Ir al carrito</Link>
          </div> 
        : <ItemCounter stock={product.stock} onAdd={onAdd}/>}
    </div>
  )
}

export default ItemDetail