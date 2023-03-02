import React from 'react';
import Containers from '../containers';
import Iglesia from '../../assets/iglesia-white.png';
import Ropa from '../../assets/camiseta.png';



import './style.css'
const Body = () => {
    return (
        <div className='body'>
            <div>
                <h1 className='title'>¡Te invitamos a nuestra mejor cita!</h1>
                <p className='texts'>"Les estoy dando un mandamiento nuevo: que se amen los unos a los otros. Ámense tal como yo los amé"</p>
                <p>Juan 13:34</p>
                <h2 className='subtitle'> 18 de Noviembre de 2023</h2>
            </div>
            <div className='date'>
                <div className='date_info'>
                    <span>Día</span>
                    18
                </div>
                <div className='date_info'>
                    <span>Mes</span>
                    11
                </div>
            </div>
            <div className='date'>
                <div className='date_info'>
                    <span>Año</span>
                    2023
                </div>
                <div className='date_info'>
                    <span>Hora</span>
                    20:00 hs
                </div>
            </div>
            <Containers
                iconoUrl={Iglesia}
                title="Ceremonia y Brindis"
                text="Dr Carlos María de Pena 4164, 12900 Montevideo, Departamento de Montevideo" />
            <Containers
                iconoUrl={Ropa}
                title="Código de vestimenta"
                text="Vestimenta formal" />
        </div>
    )
}

export default Body;