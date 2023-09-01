// Desenvolva uma página que utilize a propriedade navigator.languages para exibir uma
// saudação de boas-vindas no idioma preferido do usuário. Crie uma lista suspensa onde o
// usuário pode escolher entre diferentes idiomas e atualize a página com base na seleção.

const DETECTAR_LINGUAGEM = document.querySelector("#detectarLinguagem");

DETECTAR_LINGUAGEM.addEventListener("click", async (event) => {
    event.preventDefault();
    let language = navigator.language;

    AREA_RESPOSTA.innerHTML = `
        <h1>A linguagem padrão do seu navegador é ${language}</h1>
    `;
});