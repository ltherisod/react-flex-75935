import React from 'react'

const FetchHoc = ({data, loading, error}) => {
   
    if(error){
        return <h1>Hubo un error, intente mas tarde</h1>
    }
  return (
    <div>
        {loading ? <p>Cargando magos...</p> : data?.map((mago)=> <p key={mago.name}>{mago.name}</p>)}
    </div>
  )
}

export default FetchHoc