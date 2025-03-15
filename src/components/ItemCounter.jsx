import React, { useState } from 'react'

const ItemCounter = ({stock, onAdd}) => {
    const [count, setCount]= useState(1)

    const add = () => {
        if(count < stock){
            setCount(count + 1)
        }
    }

    const substrack = ()=> {
        if( count > 0){
            setCount(count - 1)
        }
    }

    const addToCart = () => {
        onAdd(count)
    }
  return (
    <div>
        <div>
        <button className='btn btn-danger' onClick={substrack}>-</button>
        <span className='btn '>{count}</span>
        <button className='btn btn-success' onClick={add}>+</button>
    </div>
    {/* funcion anonima */}
    {/* <button className='btn btn-primary' disabled={stock === 0 || count === 0} onClick={()=>onAdd(count)}> Agregar al carrito</button> */}
    {/* funcion aparte */}
    <button className='btn btn-primary' disabled={stock === 0 || count === 0} onClick={addToCart}> Agregar al carrito</button>
    </div>
  )
}

export default ItemCounter