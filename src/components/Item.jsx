import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
 
  return (
    <div className='card' style={{width:'10rem', marginTop:15}}>
        <img className='card-img-top' src={producto.img} alt={producto.name}/>
        <div className='card-body'>
            <h5 className='card-title'>{producto.name}</h5>
            <p className='card-text'>${producto.price},00</p>
            {/* <Link className='btn btn-dark' to={'/item/'+producto.id}>Ver mas</Link> */}
            {/* otra forma de escribirlo */}
            <Link className='btn btn-dark' to={`/item/${producto.id}`}>Ver mas</Link>
        </div>
    </div>
  )
}

export default Item