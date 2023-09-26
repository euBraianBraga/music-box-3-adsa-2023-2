// Importa a instância "api" que você criou em "./api", que permite fazer solicitações HTTP para sua API.
import api from "./api";

// Define o componente "App", que é o componente principal da sua aplicação.
function App() {
  // Define uma função chamada "listar" que será chamada quando o botão for clicado.
  function listar() {
    // Faz uma solicitação GET à API e registra a resposta no console.
    // A chamada api.get() retorna uma promessa, então isso não funcionará como esperado.
    console.log(api.get());
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

Dentro do componente "App", definimos uma função chamada "listar". Essa função será chamada quando o botão "Listar" for clicado.

Dentro da função "listar", você tenta fazer uma solicitação GET à API usando api.get(). No entanto, isso não funcionará diretamente, pois a função api.get() retorna uma promessa, e você precisa lidar com ela usando then ou async/await para acessar os dados da resposta.

No retorno do componente "App", você renderiza um título <h1>Titulo</h1> e um botão. Quando o botão é clicado, ele chama a função "listar".

Lembre-se de que, para fazer uma solicitação HTTP bem-sucedida e acessar os dados da resposta, você deve lidar com a promessa retornada por api.get(), por exemplo, usando then ou async/await. Caso contrário, você pode não receber os dados esperados no console.

*/
