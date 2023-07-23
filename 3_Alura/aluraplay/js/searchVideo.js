import { ConnectAPI } from "./APIConnection.js";
import buildCard from "./showVideos.js";

async function searchVideo(event) {
    event.preventDefault();

    const searchInput = document.querySelector("[data-search]").value;
    const search = await ConnectAPI.searchVideos(searchInput);

    const list = document.querySelector("[data-list]");

    while (list.firstChild) {
        list.removeChild(list.firstChild);
    };

    //ou list.innerHTML = "";

    search.forEach((e) =>
        list.appendChild(buildCard(e.titulo, e.descricao, e.url, e.imagem))
    );

    if (search.length == 0) {
        list.innerHTML = `<h2 class="mensagem__titulo">Não existe vídeos com este termo</h2>`
    }
}

const searchInputButton = document.querySelector("[data-search-button]");

searchInputButton.addEventListener("click", (event) => searchVideo(event));
