import api from "../api"
import React, { useEffect, useState } from "react";
import iconeEditar from "../html-css-template/imagens/edit-icon.png";
import iconeDeletar from "../html-css-template/imagens/delete-icon.png";
import capaPadrao from "../html-css-template/imagens/capa.png";

function ItemMusica(props) {

  const [imageUrl, setImageUrl] = useState("");
  const [editando, setEditando] = useState(false);

  const [inputAno, setInputAno] = useState(props.ano);
  const [inputNome, setInputNome] = useState(props.nome);
  const [inputGenero, setInputGenero] = useState(props.genero);
  const [inputArtista, setInputArtista] = useState(props.artista);

  useEffect(() => {
    setImageUrl(`${props.capa}?random=${Math.random()}`);
  }, [props.capa]);


  const estiloCard = {
    backgroundImage: `url(${props.capa ? imageUrl : capaPadrao})`,
  }

  function atualizarMusica() {
    const corpoRequisicao = {
      nome: inputNome,
      artista: inputArtista,
      genero: inputGenero,
      ano: inputAno
    };

    api
      .put(`/${props.id}`, corpoRequisicao)
      .then((response) => {
        console.log("Resposta", response);
        alert("Música atualizada com sucesso!");
      })
      .catch((erro) => {
        alert("Erro ao atualizar música!");
        console.log("Erro", erro);
      });

      
    setEditando(false);
  }

  return (
    <>
      <div style={estiloCard} className="card-music">
        <div className="icons">
          <img
            onClick={() => {
              setEditando(true);
            }}
            src={iconeEditar} alt="" />
          <img src={iconeDeletar} alt="" />
        </div>
        <div className="info-music">
          <p>
            <strong className="card-title">música: </strong>
            <input
              className={editando ? "input-music-enable" : "input-music-disabled"}
              type="text" defaultValue={props.nome}
              disabled={editando === false}
              onChange={(e) => {
                setInputNome(e.target.value);
              }}
            />
          </p>
          <p>
            <strong className="card-title">artista: </strong>
            <input
              className={editando ? "input-music-enable" : "input-music-disabled"}
              type="text"
              defaultValue={props.artista}
              disabled={editando === false}
              onChange={(e) => {
                setInputArtista(e.target.value);
              }}
            />
          </p>
          <p>
            <strong className="card-title">categoria: </strong>
            <input
              className={editando ? "input-music-enable" : "input-music-disabled"}
              type="text"
              defaultValue={props.genero}
              disabled={editando === false}
              onChange={(e) => {
                setInputGenero(e.target.value);
              }}
            />
          </p>
          <p>
            <strong className="card-title">ano: </strong>
            <input className={editando ? "input-music-enable" : "input-music-disabled"} type="text" defaultValue={props.ano}
              disabled={editando === false}
              onChange={(e) => {
                setInputAno(e.target.value);
              }}
            />
          </p>
          <button
            onClick={() => {
              atualizarMusica();
            }}
            className={editando ? "btn-salvar-enable" : "btn-salvar-disabled"}>
            Salvar
          </button>
        </div>
      </div>
    </>
  );
}

export default ItemMusica;
