import React from 'react'

const CardApi = ({personaje}) => {
  return (
    <div className='card' style={{width:'10rem', marginTop:15}}>
    <img className='card-img-top' src={personaje.image} alt={personaje.name}/>
    <div className='card-body'>
        <h5 className='card-title'>{personaje.name}</h5>
        <p className='card-text'>{personaje.species}</p>
        <a className='btn btn-dark'>Ver mas</a>
    </div>
</div>
  )
}

export default CardApi