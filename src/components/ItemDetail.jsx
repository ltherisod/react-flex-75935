import React from 'react'
import ItemCounter from './ItemCounter'

const ItemDetail = ({product}) => {
    const onAdd = (quantity) => {
        alert(`Agregaste ${quantity} unidades`)
    }
  return (
    <div>
        <h1>Detalle del producto : {product.name}</h1>
        <img src={product.img}  alt={product.name}/>
        <p>{product.description}</p>
        <p>Stock: {product.stock} unidades</p>
        <p>Precio: ${product.price},00</p>
        <ItemCounter stock={product.stock} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetail