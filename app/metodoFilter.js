const botoes = document.querySelectorAll('.btn')
const btnLivrosDisponiveis = document.getElementById('btnLivrosDisponiveis')

botoes.forEach(botao => {
    botao.addEventListener('click',(evento) => {
        evento.preventDefault()
        filtrarLivros(botao.value)
    })
});


function filtrarLivros(filtro){
    let livrosFiltrados = livros.filter( livro => livro.categoria ==  filtro)
    exibirLivros(livrosFiltrados)
}


btnLivrosDisponiveis.addEventListener('click',filtrarLivrosDisponiveis)

function filtrarLivrosDisponiveis(){
    let livrosFiltrados = livros.filter( livro => livro.quantidade > 0)
    exibirLivros(livrosFiltrados)
}