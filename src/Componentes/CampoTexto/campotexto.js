import React from "react";
import './campotexto.css';

const CampoTexto = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label> {props.label} </label>
            <input onChange={aoDigitado} placeholder={props.placeholder} value={props.value} />
        </div>
    )
}

export default CampoTexto;