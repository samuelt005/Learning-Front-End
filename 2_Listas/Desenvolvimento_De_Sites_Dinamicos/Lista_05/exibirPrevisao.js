const EXIBIR_PREVISAO = document.querySelector("#exibirPrevisao");

async function consultaPrevisao(lat, lon) {
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

    let previsaoJSON = await consultaPrevisao(lat, lon);

    let previsaoHoras = previsaoJSON.hourly.time.map((time, index) => {
        return {
            time: time,
            temperature: previsaoJSON.hourly.temperature_2m[index],
            humidity: previsaoJSON.hourly.relativehumidity_2m[index],
            precipitationProbability: previsaoJSON.hourly.precipitation_probability[index],
            rain: previsaoJSON.hourly.rain[index]
        };
    });

    AREA_RESPOSTA.innerHTML = "";

    let stringHoras = "";

    previsaoHoras.forEach((hora) => {
        //Converte a data recebida em formato Date para o formato local
        const dataObj = new Date(hora.time);
        const options = {hour: 'numeric', minute: 'numeric' };
        const dataLegivel = dataObj.toLocaleDateString('pt-BR', options);

        stringHoras += `
        <tr>
            <td>${dataLegivel}</td>
            <td>${hora.temperature} °C</td>
            <td>${hora.humidity} %</td>
            <td>${hora.precipitationProbability} %</td>
            <td>${hora.rain} %</td>
        </tr>
    `;
    });

    AREA_RESPOSTA.innerHTML = `
        <div class="latLon">
            <p>Latitude: ${previsaoJSON.latitude}</p>
            <p>Longitude: ${previsaoJSON.longitude}</p>
        </div>
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



