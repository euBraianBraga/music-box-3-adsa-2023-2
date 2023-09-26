// Importa a instância "api" que você criou em "./api", que permite fazer solicitações HTTP para sua API.
import api from "./api";

// Define o componente "App", que é o componente principal da sua aplicação.
function App() {
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
      })
      .catch((erroOcorrido) => {
        // Esta função será chamada se houver algum erro durante a requisição.
        // O erro estará disponível como "erroOcorrido".
        console.log("Erro durante a Requisição:", erroOcorrido);
      });
  }

  return (
    <>
      <h1>Titulo</h1>
      {/* Cria um botão com um evento de clique que chama a função "listar" quando clicado. */}
      <button onClick={listar}>Listar</button>
    </>
  );
}

// Exporta o componente "App" para que ele possa ser importado e usado em outros lugares do seu código.
export default App;

/*

Importamos a instância "api" que você criou em "./api", permitindo que você a utilize para fazer solicitações HTTP à sua API.

Definimos o componente "App", que é o componente principal da sua aplicação.

Dentro do componente "App", definimos uma função chamada "listar" que será chamada quando o botão "Listar" for clicado.

Dentro da função "listar", fazemos uma solicitação GET à API usando api.get(). Em seguida, encadeamos then para lidar com a resposta da API quando a requisição for realizada com sucesso.

No bloco then, a função de callback recebe a resposta da API como "respostaObtida". Os comentários adicionais explicam o que está acontecendo em cada linha de log.

Também encadeamos catch para lidar com erros que possam ocorrer durante a requisição. Se ocorrer algum erro, a função de callback catch será chamada, e o erro estará disponível como "erroOcorrido".

*/
