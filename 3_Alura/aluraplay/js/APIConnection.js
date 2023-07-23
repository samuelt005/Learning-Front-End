async function listVideos() {
    const connection = await fetch("http://localhost:3000/videos");
    const convertedConnection = await connection.json();
    
    return convertedConnection;
}

async function newVideo(titulo, descricao, url, imagem) {
    const connection = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });

    if(!connection.ok) {
        throw new Error("Não foi possível enviar o vídeo!")
    }

    const convertedConnection = await connection.json();
    return convertedConnection;
};

async function searchVideos(searchInput) {
    const connection = await fetch(`http://localhost:3000/videos?q=${searchInput}`);
    const convertedConnection = connection.json();

    return convertedConnection;
}

//Cria um objeto "ConnectAPI" que contem a função "listVideos"
export const ConnectAPI = {
    listVideos,
    newVideo,
    searchVideos
}