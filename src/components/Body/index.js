import React from 'react';
import './style.css'
const Body = () => {
    return (
        <div className='body'>
            <div>
                <h1 className='title'>¡Te invitamos a nuestra mejor cita!</h1>
                <p className='texts'>"Les estoy dando un mandamiento nuevo: que se amen los unos a los otros. Ámense tal como yo los amé"</p>
                <p>Juan 13:34</p>
                <h2 className='subtitle'> 10 de Febrero de 2024</h2>
            </div>
            <div className='date'>
                <div className='date_info'>
                    <span>Día</span>
                    10
                </div>
                <div className='date_info'>
                    <span>Mes</span>
                    02
                </div>
            </div>
            <div className='date'>
                <div className='date_info'>
                    <span>Año</span>
                    2024
                </div>
                <div className='date_info'>
                    <span>Hora</span>
                    20:00 hs
                </div>
            </div>


            <div className='ubication'>
                <img className='image' alt='icono iglesia' src={require('../../assets/iglesia-white.png')} />
                <h3 className='texts-pink'>Ceremonia</h3>
                <p>Dr Carlos María de Pena 4164, 12900 Montevideo, Departamento de Montevideo</p>
            </div>
        </div>
    )
}

export default Body;