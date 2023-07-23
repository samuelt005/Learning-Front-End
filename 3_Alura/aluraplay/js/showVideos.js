//Importa o objeto "ConnectAPI" do arquivo
import {ConnectAPI} from "./APIConnection.js";

const list = document.querySelector("[data-list]");

export default function buildCard(titulo, descricao, url, imagem) {
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `
        <iframe width="100%" height="72%" src="${url}"
            title="${titulo}" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        <div class="descricao-video">
            <img src="${imagem}" alt="logo canal alura">
            <h3>${titulo}</h3>
            <p>${descricao}</p>
        </div>
    `;
  return video;
}

async function listVideo() {
    try {
        const APIList = await ConnectAPI.listVideos();
        APIList.forEach((e) => {
            list.appendChild(buildCard(e.titulo, e.descricao, e.url, e.imagem));
    });  
    } catch {
        list.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de vídeos!</h2>`
    }
}

listVideo();