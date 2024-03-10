const botoes = document.querySelectorAll('.btn')
const btnLivrosDisponiveis = document.getElementById('btnLivrosDisponiveis')
const ElementoValorTotalLivros = document.getElementById('valor_total_livros_disponiveis')    
ElementoValorTotalLivros.innerHTML = ''

botoes.forEach(botao => {
    botao.addEventListener('click',(evento) => {
        evento.preventDefault()
        filtrarLivros(botao.value)
    })
});

function exibirValorTotalDosLivrosDisponiveis(valorTotalLivrosDisponiveis){
    ElementoValorTotalLivros.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotalLivrosDisponiveis}</span></p>
        </div>
    `
}

function filtrarLivros(filtro){
    ElementoValorTotalLivros.innerHTML = ''

    let livrosFiltrados = livros.filter( livro => livro.categoria ==  filtro)
    exibirLivros(livrosFiltrados)
}


btnLivrosDisponiveis.addEventListener('click',filtrarLivrosDisponiveis)

function filtrarLivrosDisponiveis(){
    debugger
    let livrosFiltrados = livros.filter( livro => livro.quantidade > 0)
    exibirLivros(livrosFiltrados)
    let valorTotalLivrosDisponiveis = calcularValorTotalLivrosDisponiveis(livrosFiltrados)
    console.log(valorTotalLivrosDisponiveis)
    exibirValorTotalDosLivrosDisponiveis(valorTotalLivrosDisponiveis)   
}