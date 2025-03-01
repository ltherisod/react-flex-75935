import React from 'react'
import Item from './Item'

const ItemList = ({data}) => {
  return (
    <div className='d-flex justify-content-around align-items-center flex-wrap'>
        {data.map((producto)=> <Item key={producto.id} producto={producto}/>)}
    </div>
  )
}

export default ItemList