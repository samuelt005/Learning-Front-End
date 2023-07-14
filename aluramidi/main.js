//array de teclas de som
const listaButtons = document.querySelectorAll('.tecla');

//for para repitir a lógica para todos os botões
for (let i = 0; i < listaButtons.length; i++) {

    const tecla = listaButtons[i];

    //puxar cada classe secundária de cada tecla
    const listaSounds = tecla.classList[1];

    //template string
    const idAudio = `#som_${listaSounds}`;

    tecla.onclick = function() { //função anônima para chamar outra função apenas quando interage
        toca_som(idAudio)
    };

    tecla.onkeydown = function(evento) { //Função para mudar a cor do botão apenas quando espaço ou enter são pressionados
        
        console.log(evento.code === 'Space' || evento.code === 'Enter');
        
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa')
        };
    }
    
    tecla.onkeyup = function() { //Função para remover a cor após soltar a tecla
        tecla.classList.remove('ativa');
    }
}

//função para tocar cada som
function toca_som(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    //Verificador para que o elemento enviado a função toca_som seja audio
    if (elemento /*mesmo que elemento != null*/ && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Elemento não encontrado ou seletor inválido!');
    }
}
