import React from "react";
import capaPadrao from "../html-css-template/imagens/capa.png";

function ItemMusica(props) {

  const estiloCard = {
    backgroundImage: `url(${props.capa ? props.capa : capaPadrao})`,
  }

  return (
    <>
      <div style={estiloCard} className="card-music">
        <div className="icons">
          <img src="../imagens/edit-icon.png" alt="" />
          <img src="../imagens/delete-icon.png" alt="" />
        </div>
        <div className="info-music">
          <p>
            <strong className="card-title">música: </strong>
            <input className="input-music-enable" type="text" defaultValue={props.nome} />
          </p>
          <p>
            <strong className="card-title">artista: </strong>
            <input
              className="input-music-enable"
              type="text"
              defaultValue={props.artista}
            />
          </p>
          <p>
            <strong className="card-title">categoria: </strong>
            <input
              className="input-music-enable"
              type="text"
              defaultValue={props.genero}
            />
          </p>
          <p>
            <strong className="card-title">ano: </strong>
            <input className="input-music-enable" type="text" defaultValue={props.ano} />
          </p>
          <button className="btn-salvar-enable">Salvar</button>
        </div>
      </div>
    </>
  );
}

export default ItemMusica;
