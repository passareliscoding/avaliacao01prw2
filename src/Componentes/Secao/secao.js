import React from "react";
import './secao.css';
import Produto from "../Produto/produto";

    const Secao = (props) => {
        return (
            (props.produtos.length > 0) ? <section className="secao" style={{backgroundColor:props.corSecundaria}}>
                <h3 style={{borderColor:props.corPrimaria}}>{props.nome}</h3>

                <div className="produtos">

                {props.produtos.map( produto => <Produto key={produto.nome} 
                                                        nome={produto.nome}
                                                        preco={produto.preco}
                                                        estado={produto.estado} 
                                                        marca={produto.marca}
                                                        imagemMarca={produto.imagemMarca} />)}

                </div>

            </section>

            : ''
        )
    }

export default Secao;