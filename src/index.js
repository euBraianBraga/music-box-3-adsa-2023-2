// Importa a biblioteca React, que é necessária para criar e renderizar componentes React.
import React from "react";

// Importa a função `createRoot` do ReactDOM/client para criar uma raiz de renderização.
import ReactDOM from "react-dom/client";

// Importa o componente principal da sua aplicação, geralmente chamado de "App".
import App from "./App";

// Cria uma raiz de renderização com base no elemento HTML com o ID "root".
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renderiza o componente "App" dentro de um elemento "StrictMode".
root.render(
  <React.StrictMode>
    <App />
    {/* Alterar aqui para ver o exemplo funcionando */}
  </React.StrictMode>
);

/*

Importamos a biblioteca React, que é essencial para criar e trabalhar com componentes React.

Importamos a função createRoot do ReactDOM/client, que é usada para criar uma raiz de renderização React. Essa função é uma maneira mais avançada de criar uma raiz de renderização.

Importamos o componente principal da sua aplicação, que normalmente é chamado de "App". Este é o ponto de entrada da sua aplicação React.

Criamos uma raiz de renderização chamada "root" usando ReactDOM.createRoot(). Passamos como argumento o elemento HTML com o ID "root", que é o local onde o componente "App" será renderizado.

Usando a função root.render(), renderizamos o componente "App" dentro de um componente "StrictMode". O React.StrictMode é usado para ativar verificações e avisos adicionais durante o desenvolvimento, ajudando a identificar problemas potenciais na aplicação.

*/
