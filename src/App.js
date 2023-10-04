import api from "./api";
import Musicas from "./Musicas";
import { useState } from "react";
import "./html-css-template/css/style.css";
import "./html-css-template/css/reset.css";

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
      <Musicas />
    </>
  );
}
export default App;
