function verificar() {
    let data = new Date()
    let ano = data.getUTCFullYear()
    let formAno = document.getElementById('txtano')
    let resposta = document.querySelector('div#resposta')
    let alerta = document.querySelector('div#alerta')
    let anoDino = 0 - 65000000
    let idade = ano - Number(formAno.value)
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (idade >= 100) {
        alerta.innerHTML = `<strong>[Alerta] Você realmente tem ${idade} anos?</strong>`
    }
    if (formAno.value > ano) {
        window.alert('[ERRO] Eu acho que você ainda não nasceu!')
    } else if (formAno.value == 0) {
        window.alert('[ERRO] Seria você o proprio Jesus na terra?!')
    } else if (formAno.value < 0) {
        window.alert('[ERRO] Você realmente ainda está vivo? De qual era você veio? Por acaso você conheceu os dinosauros?')
    } else {
        let formSex = document.getElementsByName('radsex')
        let genero = ''
        if (formSex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 5) {
                //bebe
                img.setAttribute('src', 'imagens/homembebe.png')
            } else if (idade >= 5 && idade < 12) {
                //crianca
                img.setAttribute('src', 'imagens/homemcrianca.png')
            } else if (idade < 19) {
                //adolescete
                img.setAttribute('src', 'imagens/homemadolescente.png')
            } else if (idade < 40) {
                //jovem adulto
                img.setAttribute('src', 'imagens/homemjovem.png')
            } else if (idade < 60) {
                //maduro
                img.setAttribute('src', 'imagens/homemmaduro.png')
            } else {
                //velho
                img.setAttribute('src', 'imagens/homemvelho.png')
            }
        } else if (formSex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 5) {
                //bebe
                img.setAttribute('src', 'imagens/mulherbebe.png')
            } else if (idade >= 5 && idade < 12) {
                //crianca
                img.setAttribute('src', 'imagens/mulhercrianca.png')
            } else if (idade >= 12 && idade < 19) {
                //adolescete
                img.setAttribute('src', 'imagens/mulheradolescente.png')
            } else if (idade >= 19 && idade < 40) {
                //jovem adulto
                img.setAttribute('src', 'imagens/mulherjovem.png')
            } else if (idade >= 40 && idade < 60) {
                //maduro
                img.setAttribute('src', 'imagens/mulhermadura.png')
            } else {
                //velho
                img.setAttribute('src', 'imagens/mulhervelha.png')
            }
        }
        resposta.innerHTML = `Você é um <strong>${genero}</strong> de: <Strong>${idade} anos</strong>. `
        resposta.appendChild(img)
    }
}
