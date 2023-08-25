//1) Utilize o link https://designer.mocky.io/ para criar as requisições.
//      a) Crie um mock de uma api GET que retorne a previsão do tempo. Realize a requisição
//      neste endereço e exiba em tela colocando imagens da previsão e temperatura.
//      b) Crie um mock de uma api GET que retorne várias notícias, que tenha título, conteúdo
//      e imagem. Preencha em tela as notícias dentro do body do documento.
//      c) Crie um mock que receba um cadastro de tarefas, que possa inserir novas e exibir
//      em tela todas as tarefas criadas.
const WEATHER_ENDPOINT = "https://api.open-meteo.com/v1/forecast?latitude=-24.7136&longitude=-53.7431&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,rain&timezone=America%2FSao_Paulo&forecast_days=1";
const DIV_CONTAINER = document.querySelector(".container");
const AREA_RESPOSTA = document.querySelector(".resultado");
const EXIBIR_PREVISAO = document.querySelector("#exibirPrevisao");
const EXIBIR_NOTICIAS = document.querySelector("#exibirNoticias");
const EXIBIR_TAREFAS = document.querySelector("#exibirTarefas");

async function exibePrevisao(lat, lon) {
    try {
        let previsao = await fetch("https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lon + "&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,rain&timezone=America%2FSao_Paulo&forecast_days=1");

        if (!previsao.ok) {
            throw new Error(`Bad Request: ${previsao.status}`);
        }

        return await previsao.json();
    } catch (e) {
        AREA_RESPOSTA.innerHTML = "";
        AREA_RESPOSTA.innerHTML = `
        <h1>Ops! Algo de errado ocorreu!</h1>
        <p>${e}</p>
        <img src="" alt="">
    `;
    }
}


EXIBIR_PREVISAO.addEventListener("click", async (event) => {
    let lat = document.querySelector("#lat").value;
    let lon = document.querySelector("#lon").value;

    event.preventDefault();

    let previsaoJSON = await exibePrevisao(lat, lon);

    let previsaoHoras = previsaoJSON.hourly.time.map((time, index) => {
        return {
            time: time,
            temperature: previsaoJSON.hourly.temperature_2m[index],
            humidity: previsaoJSON.hourly.relativehumidity_2m[index],
            precipitationProbability: previsaoJSON.hourly.precipitation_probability[index],
            rain: previsaoJSON.hourly.rain[index]
        };
    });


    console.log(previsaoJSON)

    AREA_RESPOSTA.innerHTML = "";

    let stringHoras = "";

    previsaoHoras.forEach((hora) => {
        stringHoras += `
        <tr>
            <td>${hora.time}</td>
            <td>${hora.temperature}</td>
            <td>${hora.humidity}</td>
            <td>${hora.precipitationProbability}</td>
            <td>${hora.rain}</td>
        </tr>
    `;
    });

    AREA_RESPOSTA.innerHTML = `
        <p>Latitude: ${previsaoJSON.latitude}</p>
        <p>Longitude: ${previsaoJSON.longitude}</p>
        <table class="tabela">
            <tr>
                <th>Horas</th>
                <th>Temperatura</th>
                <th>Umidade</th>
                <th>Probabilidade de Precipitação</th>
                <th>Chuva</th>
            </tr>
            ${stringHoras}
        </table>
`;
});



