// Verificar a conexão com a Internet através da API do BOM. Crie uma página web que use o
// BOM para verificar se o usuário está conectado à internet. Exiba uma mensagem no DOM
// indicando se o usuário está online ou offline.

const VERIFICAR_CONEXAO = document.querySelector("#verificarConexao");

VERIFICAR_CONEXAO.addEventListener("click", (event) => {
    event.preventDefault();

    let statusNavegador = navigator.onLine ? "Online" : "Offline";

    AREA_RESPOSTA.innerHTML = `
        <h1>Você está ${statusNavegador}</h1>
    `;
});