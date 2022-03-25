function contar() {
    let inicio = document.querySelector('input#inicio')
    let fim = document.querySelector('input#fim')
    let pular = document.querySelector('input#pular')
    let resposta = document.querySelector('p#resposta')
    if (inicio.value.length == 0) {
        resposta.innerHTML = 'Impossível contar, preencha todos os dados para continuar!'
    } else if (fim.value.length == 0) {
        resposta.innerHTML = 'Impossível contar, preencha todos os dados para continuar!'
    } else if (pular.value.length == 0) {
        resposta.innerHTML = 'Impossível contar, preencha todos os dados para continuar!'
    } else {
        resposta.innerHTML = 'Contando... <br>'
        let inicio1 = Number(inicio.value)
        let fim1 = Number(fim.value)
        let pular1 = Number(pular.value)
        if (pular1 == 0) {
            pular1 = 1
        } if (inicio1 < fim1) {
            //contagem crescente
            for (let i = inicio1; i <= fim1; i += pular1) {
                resposta.innerHTML += `&#x1F449 ${i} `
            }
        } else if (fim1 < inicio1) {
            //contagem regressiva
            for (let i = inicio1; i >= fim1; i -= pular1) {
                resposta.innerHTML += `&#x1F449 ${i} `
                // também é possível usar o emoji com a seguinte formatação
                // porém apensa dentro das crases
                // resposta.innerHTML += `\u{1F449} ${i} `
            }
        }
        resposta.innerHTML += `&#x1F3C1`
    }

}

