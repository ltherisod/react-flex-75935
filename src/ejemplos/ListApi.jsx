import React from 'react'
import CardApi from './CardApi'

const ListApi = ({characters}) => {
  return (
    <div className='d-flex justify-content-around align-items-center flex-wrap'>
        {characters.map((personaje) => <CardApi key={personaje.id} personaje={personaje}/>)}
    </div>
  )
}

export default ListApi