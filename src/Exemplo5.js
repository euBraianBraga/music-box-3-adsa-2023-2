// Importa a instância "api" que você criou em "./api", que permite fazer solicitações HTTP para sua API.
import api from "./api";

// Importa o hook useState do React, que é usado para gerenciar estados dentro de componentes funcionais.
import { useState } from "react";

// Define o componente "App", que é o componente principal da sua aplicação.
function App() {
  // Cria um estado chamado "musicas" usando o hook useState, com um valor inicial de um vetor vazio.
  const [musicas, setMusicas] = useState([]);
  // Isso permite que você armazene e atualize os dados das músicas recebidos da API.

  // Define uma função chamada "listar" que será chamada quando o botão for clicado.
  function listar() {
    // Faz uma solicitação GET à API usando api.get().
    api
      .get()
      .then((respostaObtida) => {
        // Esta função será chamada quando a requisição for realizada com sucesso.

        // Registra a resposta da API no console.
        console.log("Resposta da API:", respostaObtida);

        // Acessa o status da resposta e imprime no console.
        console.log("Status da Resposta:", respostaObtida.status);

        // Acessa os dados da resposta (data) e imprime no console.
        console.log("Dados da Resposta:", respostaObtida.data);

        // Define o estado "musicas" com os dados recebidos pela resposta da requisição.
        setMusicas(respostaObtida.data);
      })
      .catch((erroOcorrido) => {
        // Esta função será chamada se houver algum erro durante a requisição.

        // Registra o erro no console.
        console.log("Erro durante a Requisição:", erroOcorrido);
      });
  }

  return (
    <>
      <h1>Titulo</h1>
      {/* Cria um botão com um evento de clique que chama a função "listar" quando clicado. */}
      <button onClick={listar}>Listar</button>

      {/* Mapeia o vetor "musicas" e renderiza os detalhes de cada música. */}
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

// Exporta o componente "App" para que ele possa ser importado e usado em outros lugares do seu código.
export default App;

/*
Importamos a instância "api" que você criou em "./api", permitindo que você a utilize para fazer solicitações HTTP à sua API.

Importamos o hook useState do React, que é usado para gerenciar estados dentro de componentes funcionais.

Definimos o componente "App", que é o componente principal da sua aplicação.

Criamos um estado chamado "musicas" usando o hook useState, com um valor inicial de um vetor vazio. Isso permite armazenar os dados das músicas recebidos da API.

Definimos uma função chamada "listar" que será chamada quando o botão "Listar" for clicado. Dentro dessa função, fazemos uma solicitação GET à API, registramos a resposta no console e atualizamos o estado "musicas" com os dados recebidos.

No retorno do componente "App", renderizamos um título <h1>Titulo</h1>, um botão que chama a função "listar" quando clicado e uma lista de músicas mapeando o vetor "musicas" e exibindo os detalhes de cada música. O atributo key é usado para ajudar o React a identificar de forma única cada item na lista.

*/
