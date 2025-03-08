import React, { useState } from 'react'

const MouseTracker = ({render}) => {
    const [mouse, setMouse]= useState({x:0, y:0})

    const handleMouseMovement = (e) => {
            setMouse({
                x:e.clientX,
                y:e.clientY
            })
    }
  return (
    <div onMouseOver={handleMouseMovement} style={{height:'100vh', width:'100vw'}}>
        <h1>Hola soy un titulo</h1>
        {render(mouse)}
    </div>
  )
}

export default MouseTracker