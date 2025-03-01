import { useState, useEffect } from "react"
import Text from './Text'
const Contador = () => {
    const [count, setCount] = useState(1)
    const [mostrar, setMostrar] = useState(false)
    const sumar = () => {
        setCount (count + 1)
    }

    const restar = ()=>{
        setCount(count - 1)
    }

    // console.log('Soy el contador')

    // //No es recomendable
    // useEffect(()=>{
    //     console.log('Soy el use Effect y me ejecuto siempre que se actualice el componente')
    // })

    // useEffect(()=>{
    //     console.log('Soy el useEffect y me ejecuto una unica vez')
    // },[])


useEffect(()=>{
    console.log(mostrar)
},[mostrar])

    return(
        <div>
            <button onClick={restar}>-</button>
            <span>{count}</span>
            <button onClick={sumar}>+</button>
            {mostrar && <Text/>}
            <button onClick={()=> setMostrar(!mostrar)}>Mostrar</button>
        </div>
    )
}

export default Contador