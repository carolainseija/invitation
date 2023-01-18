import React from "react";
import './style.css';

const Form = () => {
    return (
        <div>
            <h1>Confirmanos tu asistencia</h1>
            <form>
                <input placeholder="Nombre" type="text" />
                <input type="text" placeholder="Apellido" />
                <button>Confirmar asistencia</button>
            </form>
        </div>
    )
}

export default Form;