import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
const LoaderComponent = () => {
  return (
    <div style={{width:'100%', height:'90vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
         <Spinner animation="border" variant="info" />
    </div>
  )
}

export default LoaderComponent