
function carregar() {
    var msg = document.getElementById('msg')
    var titulo = document.getElementById('til')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 20

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12 ) {
        titulo.innerHTML = 'Bom dia!'
        img.src="fotomanha.png"
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18 ) {
        titulo.innerHTML = 'Boa Tarde!'
        img.src="fototarde.png"
        document.body.style.background = '#ae9446ff  '
    } else {
        titulo.innerHTML = 'Boa noite!'
        img.src="fotonoite.png"
        document.body.style.background = '#534161ff'
    }
}       
