import React from 'react'
import "./SingUp.scss";

const SingUp = () => {
    return (
        <div className="gradient">
            <div className='container'>
                <div className='singUp'>
                    <h1>Registrate</h1>
                    <form action="">
                        <div className='form' >
                            <div className='firstForm'>
                                <div className='contInput'>
                                    <input placeholder='Nombre' type="text" />
                                </div>
                                <div className='contInput'>
                                    <input placeholder='Apellido' type="text" />
                                </div>
                            </div>
                            <div className='secForm'>
                                <div className='contInput'>
                                    <input placeholder='Nuevo usuario' type="text" />
                                </div>
                                <div className='contInput'>
                                    <input placeholder='Correo' type="email" />
                                </div>
                                <div className='contInput'>
                                    <input placeholder='Telefono' type="number" />
                                </div>
                                <div className='contInput'>
                                    <input placeholder='Contraseña' type="password" />
                                </div>
                                <div className='contInput'>
                                    <input placeholder='Confirmar contraseña' type="password" />
                                </div>
                                <input id="rSubmit" type="submit" value="Registrate" />

                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SingUp