// Importa a biblioteca Axios, que é usada para fazer solicitações HTTP.
import axios from "axios";

// Cria uma instância do Axios com uma URL base para sua API mockada.
const api = axios.create({
  baseURL: "suaUrlMockAPI/musicas", // Defina sua URL base aqui.
});

// Exporta a instância do Axios como o objeto "api" para ser usado em outros lugares do seu código.
export default api;

/*

Importamos a biblioteca Axios, que é uma biblioteca popular para fazer solicitações HTTP em JavaScript.

Criamos uma instância do Axios chamada "api" usando axios.create(). Isso permite que você configure opções específicas para todas as solicitações feitas usando esta instância.

Configuramos a baseURL da instância "api" para apontar para a URL base da sua API mockada. Você deve substituir "suaUrlMockAPI/musicas" pela URL real da sua API.

Exportamos a instância "api" como o objeto padrão para que você possa importá-lo em outros arquivos do seu projeto e usá-lo para fazer solicitações HTTP para a sua API. Por exemplo, em outro arquivo, você pode fazer algo como import api from "./api" para usar essa instância Axios configurada.

*/
