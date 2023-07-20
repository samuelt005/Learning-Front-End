function exibirLivros(livros) {
  sectionLivros.innerHTML = "";
  sectionValorTotal.innerHTML = "";
  livros.forEach((livro) => {
    let disponibilidade = livro.quantidade > 0 ? "livro__imagens" : "livros__imagens indisponivel";
    sectionLivros.innerHTML += `
      <div class="livro">
      <img class="${disponibilidade}" src="${livro.imagem}"
        alt="${livro.alt}" />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$ ${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
      </div>
      `;
  });
}

function calcularValorTotal(livros) {
  return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2);
}

function exibirSectionValorTotal(valorTotal) {
  sectionValorTotal.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `;
}
