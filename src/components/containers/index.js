import React from "react";
import './style.css';

const Containers = ({iconoUrl, title, text}) => {
    return (
        <div className='containers'>
            <img className='image' alt='icono iglesia' src={iconoUrl} />
            <h3 className='texts-pink'>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default Containers;