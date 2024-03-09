function exibirLivros(livros){
    const sectionLivros = document.getElementById('livros')
    sectionLivros.innerHTML = ''

    livros.forEach(livro => {
        sectionLivros.append(criarLivro(livro))
    });
}

function criarLivro(livro){
    const divLivro  = document.createElement('div')
    divLivro.classList.add('sectionLivros')

    const img = document.createElement('img')
    img.classList.add('livro__imagens')
    img.setAttribute('src',livro.imagem)
    img.setAttribute('alt',livro.alt)

    const titulo = document.createElement('h2')
    titulo.classList.add('livro__titulo')
    titulo.textContent = livro.titulo

    const descricao = document.createElement('p')
    descricao.classList.add('livro__descricao')
    descricao.textContent = livro.autor

    const preco = document.createElement('p')
    preco.classList.add('livro__preco')
    preco.setAttribute('id','preco')
    preco.textContent = `R$${livro.preco.toFixed(2)}`

    const categorias =  document.createElement('div')
    categorias.classList.add('tags')
    
        const categoria = document.createElement('span')
        categoria.classList.add('tag')
        categoria.textContent  = livro.categoria

        categorias.append(categoria)


    divLivro.append(img)
    divLivro.append(titulo)
    divLivro.append(descricao)
    divLivro.append(preco)
    divLivro.append(categorias)
    
    return divLivro
}