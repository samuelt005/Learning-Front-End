// Crie uma página que utilize a API de geolocalização do BOM para obter a latitude e a
// longitude do usuário. Use esses dados para mostrar uma localização em um mapa simples
// incorporado. Para exibir o mapa em tela podemos utilizar a biblioteca do
// https://leafletjs.com/, incluindo o código abaixo:

const VERIFICAR_LOCALIZACAO = document.querySelector("#verificarLocalizacao");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else {
        AREA_RESPOSTA.innerHTML = "Seu navegador não suportar localização!";
    }
}
function showPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    AREA_RESPOSTA.innerHTML = `
        <div id="map"></div>
        `;

    const map = L.map('map').setView([latitude, longitude], 14)

    L.marker([latitude, longitude])
        .addTo(map)
        .bindPopup('Localização')
        .openPopup();
}

VERIFICAR_LOCALIZACAO.addEventListener("click", (event) => {
    event.preventDefault();
    getLocation();
});