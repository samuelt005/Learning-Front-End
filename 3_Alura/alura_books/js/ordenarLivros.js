const botaoOrdenar = document.getElementById('btnOrdenarPorPreco');
botaoOrdenar.addEventListener('click', ordenarPorPreco);

function ordenarPorPreco() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
    exibirLivros(livrosOrdenados);
}