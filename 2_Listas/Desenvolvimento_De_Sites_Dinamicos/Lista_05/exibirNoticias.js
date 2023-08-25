const EXIBIR_NOTICIAS = document.querySelector("#exibirNoticias");

async function consultaNoticias() {
    try {
        let noticias = await fetch("https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=20&tipo=noticia");
        return await noticias.json();
    } catch (e) {
        AREA_RESPOSTA.innerHTML = "";
        AREA_RESPOSTA.innerHTML = `
        <h1>Ops! Algo de errado ocorreu!</h1>
        <p>${e}</p>
        <img src="" alt="">
    `;
    }
}


EXIBIR_NOTICIAS.addEventListener("click", async (event) => {
    event.preventDefault();

    let noticiasJSON = await consultaNoticias();
    let itensNoticias = noticiasJSON.items;

    AREA_RESPOSTA.innerHTML = "";

    let stringNoticias = "";


    itensNoticias.forEach((noticia) => {
        stringNoticias += `
        <div class="noticia">
            <h2>${noticia.titulo}</h2>
            <p>${noticia.introducao}</p>
            <p>${noticia.data_publicacao}</p>
            <a href="${noticia.link}">Ler mais</a>
        </div>
    `;
    });

    AREA_RESPOSTA.innerHTML = `
        <h1 class="tituloNoticias">Notícias do IBGE:</h1>
        <div class="noticias">
            ${stringNoticias}
        </div>
`;
});



