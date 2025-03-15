import React from "react";
import './botaoradio.css';

const BotaoRadio = (props) => {

    const aoEscolhido = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="botaoradio">
            <label>{props.label}</label>
            <div>
                {props.opcoes.map((opcao) => ( <label key={opcao.value}>
            <input
              type="radio"
              name={props.label}
              value={opcao.value}
              onChange={aoEscolhido}
            />
            {opcao.label}
          </label>
        ))}
            </div>
        </div>
    )
}

export default BotaoRadio;