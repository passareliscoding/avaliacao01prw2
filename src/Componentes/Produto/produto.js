import React from "react";
import "./produto.css";

    const Produto = (props) => {
        return (
            <div className="produto">
                <div className="cabecalho">
                    <img src={props.imagemMarca} alt={props.marca} />
                </div>

                <div className="rodape">
                    <h4>{props.nome}</h4>
                    <h4>Preço: {props.preco}</h4>
                    <h4>{props.estado} </h4>
                </div>
            </div>

        );
    }

export default Produto;