const endPointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
let livros = [];
const sectionLivros = document.getElementById('livros');
const sectionValorTotal = document.getElementById('valor_total_livros_disponiveis');

async function getLivros() {
    const res = await fetch(endPointAPI);
    livros = await res.json();
    let livrosComDesconto = aplicarDesconto(livros);
    exibirLivros(livrosComDesconto);
}

getLivros();