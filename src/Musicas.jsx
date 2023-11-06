import api from "./api";
import React, { useEffect, useState } from "react";
import Menu from "./components/Menu";
import ItemMusica from "./components/ItemMusica";

function Musicas() {
  const [musicas, setMusicas] = useState([]);

  useEffect(() => {
    listar();
  }, []);

  function listar() {
    api
      .get()
      .then((respostaObtida) => {
        console.log(respostaObtida);
        console.log(respostaObtida.status);
        console.log(respostaObtida.data);
        setMusicas(respostaObtida.data);
      })
      .catch((erroOcorrido) => {
        console.log(erroOcorrido);
      });
  }

  return (
    <>
      <Menu />
      <div className="container">
        <div className="filter">
          <button className="btn">Adicionar</button>
        </div>
      </div>
      <div className="container">
        <div className="music-boxes">
          {musicas?.map((musica) => (
              <ItemMusica
                id={musica.id}
                key={musica.id}
                nome={musica.nome}
                artista={musica.artista}
                genero={musica.genero}
                ano={musica.ano}
                capa={musica.imagem}
              />
          ))}
        </div>
      </div>
    </>
  );
}

export default Musicas;
