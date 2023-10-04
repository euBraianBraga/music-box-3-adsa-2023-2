// Importa o módulo 'api' do diretório atual
import api from "./api";
// Importa o componente 'Musicas' do diretório atual
import Musicas from "./Musicas";
// Importa o hook 'useState' da biblioteca React
import { useState } from "react";
// Importa estilos CSS do arquivo 'style.css' no diretório './html-css-template/css/'
import "./html-css-template/css/style.css";
// Importa estilos CSS do arquivo 'reset.css' no diretório './html-css-template/css/'
import "./html-css-template/css/reset.css";

// Definição do componente 'App'
function App() {
  // Define um estado 'musicas' usando o hook 'useState'
  const [musicas, setMusicas] = useState([]);

  // Função 'listar' para obter dados da 'api' e atualizar o estado 'musicas'
  function listar() {
    // Faz uma chamada à API usando o método 'get'
    api
      .get()
      // Se a chamada for bem-sucedida, atualiza o estado 'musicas' com os dados obtidos
      .then((respostaObtida) => {
        console.log(respostaObtida.data); // Exibe os dados no console
        setMusicas(respostaObtida.data); // Atualiza o estado 'musicas' com os dados da resposta
      })
      // Se houver um erro na chamada à API, exibe o erro no console
      .catch((erroOcorrido) => {
        console.log(erroOcorrido);
      });
  }

  // Retorna um componente React
  return (
    // Fragmento vazio do React, que permite retornar vários elementos adjacentes
    <>
      {/* Renderiza o componente 'Musicas' */}
      <Musicas />
    </>
  );
}

// Exporta o componente 'App' para ser utilizado em outros lugares da aplicação
export default App;