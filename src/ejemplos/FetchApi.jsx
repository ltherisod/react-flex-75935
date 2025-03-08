import React, { useState } from 'react'
import { useEffect } from 'react'
import ListApi from './ListApi'

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
        {loading ? <p>Cargando...</p> : <ListApi characters={characters}/>}
    </div>
  )
}

export default FetchApi