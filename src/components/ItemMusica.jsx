// Importa o módulo 'React' da biblioteca React
import React from "react";

// Definição do componente 'ItemMusica' que recebe 'props' como argumento
function ItemMusica(props) {
  // Retorna um componente React
  return (
    // Fragmento vazio do React, que permite retornar vários elementos adjacentes
    <>
      {/* Div que representa um cartão de música */}
      <div class="card-music">
        {/* Div para ícones de edição e exclusão */}
        <div class="icons">
          {/* Imagem de ícone de edição */}
          <img src="../imagens/edit-icon.png" alt="" />
          {/* Imagem de ícone de exclusão */}
          <img src="../imagens/delete-icon.png" alt="" />
        </div>
        {/* Div para informações da música */}
        <div class="info-music">
          {/* Parágrafo com título 'música' e campo de entrada de texto preenchido com o valor de 'props.nome' */}
          <p>
            <strong class="card-title">música: </strong>
            <input class="input-music-enable" type="text" value={props.nome} />
          </p>
          {/* Parágrafo com título 'artista' e campo de entrada de texto preenchido com o valor de 'props.artista' */}
          <p>
            <strong class="card-title">artista: </strong>
            <input
              class="input-music-enable"
              type="text"
              value={props.artista}
            />
          </p>
          {/* Parágrafo com título 'categoria' e campo de entrada de texto preenchido com o valor de 'props.genero' */}
          <p>
            <strong class="card-title">categoria: </strong>
            <input
              class="input-music-enable"
              type="text"
              value={props.genero}
            />
          </p>
          {/* Parágrafo com título 'ano' e campo de entrada de texto preenchido com o valor de 'props.ano' */}
          <p>
            <strong class="card-title">ano: </strong>
            <input class="input-music-enable" type="text" value={props.ano} />
          </p>
          {/* Botão 'Salvar' */}
          <button class="btn-salvar-enable">Salvar</button>
        </div>
      </div>
    </>
  );
}

// Exporta o componente 'ItemMusica' para ser utilizado em outros lugares da aplicação
export default ItemMusica;