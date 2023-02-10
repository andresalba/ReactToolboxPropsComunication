import React, { useState } from 'react'
import './Button.css'

export default function Button(props) {

    const [titu, setTitu] = useState()

    const captura = (e) => { //funcion para capturar la busqueda
        setTitu(e.target.value);//guardamos lo escrito
    }

    const changeBut = () => {
        props.butMsg(titu)
    }

    return (
        <div className='btn'>
            <label htmlFor="fname">Title:</label>
            <input type="text" id="fname" name="fname" onChange={captura} /><br/><br/>
            <button onClick={changeBut}>Adicionar</button>
        </div>
    )
}
