let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getBuscarLivrosDaAPI()

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI)
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibirOsLivrosNaTela(livrosComDesconto)
}

// const botoes = document.querySelectorAll('.btn')
// botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

// function filtrarLivros () {
//     const elementoBtn = document.getElementById(this.id)
//     const categoria = elementoBtn.value
//     let livrosFiltrados = livros.filter(livro => livro.categoria == categoria)
//     console.table(livrosFiltrados)
// }

// const elementoParaInserirLivros = document.getElementById('livros')

// function exibirOsLivrosNaTela(listaDeLivros) {
//     listaDeLivros.forEach(livro => {
//         elementoParaInserirLivros.innerHTML += `
//         <div class="livro">
//         <img class="livro__imagens" src="${livro.imagem}"
//           alt="${livro.alt}" />
//         <h2 class="livro__titulo">
//           ${livro.titulo}
//         </h2>
//         <p class="livro__descricao">${livro.autor}</p>
//         <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
//         <div class="tags">
//           <span class="tag">${livro.categoria}</span>
//         </div>
//       </div>
//         `
//     })
// }

// function aplicarDesconto(livros) {
//     const desconto = 0.3
//     livrosComDesconto = livros.map(livro => {
//         return {...livro, preco: livro.preco - (livro.preco * desconto)}
//     })
//     return livrosComDesconto
// }