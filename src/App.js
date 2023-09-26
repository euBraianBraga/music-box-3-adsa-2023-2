import api from "./api";
import { useState } from "react";
function App() {
  const [musicas, setMusicas] = useState([]);
  function listar() {
    api
      .get()
      .then((respostaObtida) => {
        console.log(respostaObtida.data);
        setMusicas(respostaObtida.data);
      })
      .catch((erroOcorrido) => {
        console.log(erroOcorrido);
      });
  }
  return (
    <>
      <h1>Titulo</h1>
      <button onClick={listar}>Listar</button>
      {musicas.map((musica) => (
        <div key={musica.id}>
          <h1>{musica.nome}</h1>
          <h1>{musica.artista}</h1>
          <br />
        </div>
      ))}
    </>
  );
}
export default App;
