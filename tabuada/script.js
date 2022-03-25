function gerarTabuada() {
    let numero = document.getElementById('numero')
    let areaTabuada = document.querySelector('select#seltab')
    if (numero.value.length == 0) {
        window.alert('[ERRO] Você não preencheu o número para a tabuada!')
    } else {
        let num = Number(numero.value)
        areaTabuada.innerHTML = ''
        for (i = 0; i < 11; i++) {
            let item = document.createElement('option')
            item.text = `${num} x ${i} = ${num * i}`
            // para o javascript a linha a baixo não 'faz sentido', ela é importante em outras linguagens
            item.value = `tab${i}`
            areaTabuada.appendChild(item)
        }
    }
}
