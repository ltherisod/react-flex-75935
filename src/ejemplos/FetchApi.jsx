import React, { useState } from 'react'
import { useEffect } from 'react'
import ListApi from './ListApi'
import MouseTracker from './MouseTracker'

const FetchApi = () => {
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError]= useState(null)

    useEffect(()=>{
        setLoading(true)//prendo el loader
        fetch('https://rickandmortyapi.com/api/character') //pedir los datos
        .then((res)=>res.json())//lo traduzco
        .then((respuesta) =>setCharacters(respuesta.results))//lo guardo
        .catch((error)=>setError(error)) //atrapo el error si existe
        .finally(()=> setLoading(false)) //apago el loader
    },[])
   

if(error){
    return <h1>Hubo un error </h1>
}


  return (
    <div>
          <MouseTracker render={(mouse)=>(
        <h2>Posicion del mouse: X: {mouse.x}</h2>
      )}/>
        {loading ? <p>Cargando...</p> : <ListApi characters={characters}/>}
    </div>
  )
}

export default FetchApi