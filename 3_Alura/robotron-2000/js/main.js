const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach(element => {
    element.addEventListener("click", (evento) => {
        manipula_dados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca, evento.target.dataset.controle);
    })
});

function manipula_dados(operacao, controle) {
    const parte = controle.querySelector("[data-contador]");

    if(operacao === "+") {
        parte.value = parseInt(parte.value) + 1;
    } else if (operacao === "-" && parte.value > 0) {
        parte.value = parseInt(parte.value) - 1;
    }
}

function atualizaEstatisticas (peca, operacao) {
    if (operacao === "+") {
        estatisticas.forEach( (element) => {
            element.textContent = parseInt(element.textContent) + pecas[peca][element.dataset.estatistica];
        } )
    } else if (operacao === "-") {
        estatisticas.forEach( (element) => {
            element.textContent = parseInt(element.textContent) - pecas[peca][element.dataset.estatistica];
        } )
    }
}