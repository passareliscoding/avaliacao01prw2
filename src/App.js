import React, { useState } from "react";
import Formulario from "./Componentes/Formulario/formulario";
import Secao from "./Componentes/Secao/secao";
import Banner from "./Componentes/Banner/banner";

    function App() {
        const [produtos, setProdutos] = useState([]);

        const adicionaProduto = (produto) => {
          const listaNova = produtos.slice();
          listaNova.push(produto);
          setProdutos(listaNova);
        }

        const secoes = [
            {
              nome : 'Computadores',
              corPrimaria : '#003366',
              corSecundaria : '#f4f7fa'
            },
            {
              nome : 'Acessórios',
              corPrimaria : '#28a745',
              corSecundaria : '#343a40'
            },
            {
              nome : 'Impressoras',
              corPrimaria : '#ff7f32',
              corSecundaria : '#6c757d'
            },
            {
              nome : 'Games',
              corPrimaria : '#6f42c1',
              corSecundaria : '#dcdfe1'
            },
            {
              nome : 'Gadgets',
              corPrimaria : '#17a2b8',
              corSecundaria : '#ffffff'
            }
          ]
        
        const listaSecoes = secoes.map( secao => secao.nome );

        const marcas = [{marca : 'HP',
                         imagem : '/imagens/hp-logo.png'
                        },
                        {marca : 'Dell',
                         imagem : '/imagens/dell-logo.png' 
                        },
                        {marca : 'Positivo',
                          imagem : '/imagens/positivo-logo.png' 
                         },
                         {marca : 'Asus',
                          imagem : '/imagens/asus-logo.png' 
                         },
                         {marca : 'Outros',
                          imagem : '/imagens/outros-logo.jpg' 
                         } ]
      
        return (
          <div>
            <Banner />
            <Formulario secao={listaSecoes} marcas={marcas} aoProdutoCadastrado = {produto => adicionaProduto(produto)} />
            {secoes.map((secao) => {
              const produtosDaSecao = produtos.filter((produto) => produto.secao === secao.nome);

              return ( <Secao key={secao.nome}
                              nome={secao.nome}
                              corPrimaria={secao.corPrimaria}
                              corSecundaria={secao.corSecundaria}
                              produtos={produtosDaSecao} /> ) })}
          </div>
        );
    }

export default App;
