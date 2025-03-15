import React, {useState} from "react";
import './formulario.css';
import CampoTexto from "../CampoTexto/campotexto";
import CampoNumero from "../CampoNumero/camponumero";
import ListaSuspensa from "../ListaSuspensa/listasuspensa";
import Botao from "../Botao/botao";
import BotaoRadio from "../BotaoRadio/botaoradio";

    const Formulario = (props) => {

        const aoSalvar = (evento) => {
            evento.preventDefault();

            const marcaSelecionada = props.marcas.find((m) => m.marca === marca);

            props.aoProdutoCadastrado( {
                "secao": secao,
                "marca": marca,
                "imagem": marcaSelecionada ? marcaSelecionada.imagem : "",
                "nome": nome,
                "preco": preco,
                "estado": estadoProduto
            })
        }

        const [secao, setSecao] = useState('Computadores');
        const [marca, setMarca] = useState('HP');
        const [imagemMarca, setImagemMarca] = useState('');
        const [nome, setNome] = useState('');
        const [preco, setPreco] = useState('');
        const [estadoProduto, setEstadoProduto] = useState('');

        const opcoesEstado = [ { label: "Novo", value: "novo" }, { label: "Usado", value: "usado" }]

        const aoSelecionarMarca = (valor) => {
            setMarca(valor);
            const marcaSelecionada = props.marcas.find((m) => m.marca === valor);
            setImagemMarca(marcaSelecionada ? marcaSelecionada.imagem : '');
        };

        return (
            <section className="formulario">

                <form onSubmit={aoSalvar}>

                    <h2>Dados do produto:</h2>

                    <ListaSuspensa label="Seção" itens={props.secao} aoAlterado={valor => setSecao(valor)}/>

                    <ListaSuspensa label="Marca" itens={props.marcas.map(m => m.marca)} aoAlterado={aoSelecionarMarca}/>

                    <CampoTexto label="Nome" placeholder="Digite o nome do produto" value={nome} aoAlterado={valor => setNome(valor)}/>

                    <CampoNumero label="Preço" placeholder="Digite o preço do produto" aoAlterado={valor => setPreco(valor)}/>
                    
                    <BotaoRadio label="Estado do Produto" opcoes={opcoesEstado} aoAlterado={valor => setEstadoProduto(valor)} />

                    <Botao>Inserir Produto</Botao>
                    
                </form>
            </section>
        )
    }

export default Formulario;