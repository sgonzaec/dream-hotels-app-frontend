import React from 'react'
import "./SingUp.scss";

const SingUp = () => {
  return (
    <div className='cart'>
    <div className='singUp'>
        <h1>Sing Up</h1>
    
    <div className='form'>
        <form action="">
            <label>Nombres:</label>
            <input type="text" />
            <label>Apellidos:</label>
            <input type="text" />
            <label>Usuario:</label>
            <input type="text" />
            <label>Correo:</label>
            <input type="email" />
            <label>Telefono:</label>
            <input type="number" />
            <label>Contraseña:</label>
            <input type="password" />
            <label>Confirmar contraseña:</label>
            <input type="password" />
        </form>
        
    </div>  
    </div>
    </div>
  )
}

export default SingUp