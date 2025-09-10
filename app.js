'use strict'

const campoPesquisa = document.getElementById('pesquisa')
const btnPesquisa = document.getElementById('btn-cachorro')

// async function buscarImagens (raca) {
//     const url = `https://dog.ceo/api/breed/${raca}/images`
//     const response = await fetch(url)
//     const imagens = await response.json()
//     console.log(imagens.message)
//     return imagens.message
// }

async function criarImagemCachorro () {
    const raca = campoPesquisa.value
    const url = `https://dog.ceo/api/breed/${raca}/images`
    const response = await fetch(url)
    const imagens = await response.json()
    console.log(imagens.message)
    const diva = document.getElementById('imagem-cachorro')
    diva.textContent = ""

    imagens.message.forEach(url => {

        const diva = document.getElementById('imagem-cachorro')
        const img = document.createElement('img')

        img.src = url

        diva.appendChild(img)
        diva.classList.add('div')
        diva.classList.add('img')
    });

}

btnPesquisa.addEventListener('click', criarImagemCachorro)

