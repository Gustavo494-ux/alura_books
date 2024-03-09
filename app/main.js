let livros = []
const endpointAPI= 'https://guilhermeonrails.github.io/casadocodigo/livros.json'


function inicializar () {
    getBuscarLivrosDaAPI() 
}

inicializar()


async function getBuscarLivrosDaAPI(){
    const res = await fetch(endpointAPI)
    livros = await res.json()

    let livrosComDesconto = aplicarDesconto(livros)

    console.table(livros)
    
    exibirLivros(livrosComDesconto)
}