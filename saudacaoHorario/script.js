function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let head = document.querySelector('h1')
    let footer = document.querySelector('p')
    let data = new Date()
    let data2 = new Date()
    let hora = data.getHours()
    let minuto = data2.getMinutes()
    // let hora = 14
    msg.innerHTML = `Hora atual <strong>${hora}:${minuto}</strong><br>Bom dia!`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'imagens/manha.png'
        document.body.style.background = '#FDE784'
        head.style.color = '#434446'
        footer.style.color = '#434446'
    } else if (hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#FD9B5A'
        head.style.color = '#434446'
        footer.style.color = '#434446'
        msg.innerHTML = `Hora atual <strong>${hora}:${minuto}</strong><br>Boa tarde!`
    }else {
        //BOA NOITE
        img.src = 'imagens/noite.png'
        document.body.style.background = '#434446'
        msg.innerHTML = `Hora atual <strong>${hora}:${minuto}</strong><br>Boa noite!`
    }
}