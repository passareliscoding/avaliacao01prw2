import React from "react";
import './camponumero.css';

const CampoNumero = (props) => {
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-numero">
            <label> {props.label} </label>
            <input onChange={aoDigitado} type="number" min={0} placeholder={props.placeholder} />
        </div>
    )
}

export default CampoNumero;