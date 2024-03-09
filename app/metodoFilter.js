const botoes = document.querySelectorAll('.btn')

botoes.forEach(botao => {
    botao.addEventListener('click',(evento) => {
        evento.preventDefault()
        filtrarLivros(botao.value)
    })
});

function filtrarLivros(filtro){
    console.log(filtro)
    let livrosFiltrados = livros.filter( livro => livro.categoria ==  filtro)
    console.table(livrosFiltrados)
    exibirLivros(livrosFiltrados)
}