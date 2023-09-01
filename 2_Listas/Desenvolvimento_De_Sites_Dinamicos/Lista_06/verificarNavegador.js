// Crie uma página que detecte o navegador do usuário usando a propriedade
// navigator.userAgent. Com base no navegador detectado, redirecione o usuário para uma
// página específica otimizada para esse navegador. Por exemplo, se for um navegador móvel,
// redirecione para uma página móvel, se for um navegador de desktop, redirecione para a
// versão desktop.

const DETECTAR_NAVEGADOR = document.querySelector("#verificarNavegador");

DETECTAR_NAVEGADOR.addEventListener("click", async (event) => {
    event.preventDefault();
    let browser = navigator.userAgent;
    let slicedBrowser = browser.slice(0, browser.indexOf(" "));

    AREA_RESPOSTA.innerHTML = `
        <h1>O seu navegador é ${slicedBrowser}</h1>
        <img src="dog.gif" alt="Smells bad"  width="250" />
    `;
});