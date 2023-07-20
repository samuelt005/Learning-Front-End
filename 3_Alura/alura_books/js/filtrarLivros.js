const botoesFiltros = document.querySelectorAll(".btn");
botoesFiltros.forEach((botao) => {
  botao.addEventListener("click", filtrarLivros);
});

function filtrarLivros() {
  const botaoClicado = document.getElementById(this.id);
  const categoria = botaoClicado.value;
  let livrosFiltrados =
    categoria == "disponivel"
      ? filtroDisponivel()
      : filtroCategorias(categoria);
  exibirLivros(livrosFiltrados);
  if (categoria == "disponivel") {
    const valorTotal = calcularValorTotal(livrosFiltrados);
    exibirSectionValorTotal(valorTotal);
  }
}

function filtroCategorias(categoria) {
  return livros.filter((livro) => livro.categoria == categoria);
}

function filtroDisponivel() {
  return livros.filter((livro) => livro.quantidade > 0);
}
