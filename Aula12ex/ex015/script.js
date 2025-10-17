function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano') 
    var res = document.getElementById('res')


    if (fano.value.length == 0 || fano.value > ano) {
        alert ('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
    //Criar um elemento imagem com uma tag, igual seria no HTML, mas fazendo no JS
        var img = document.createElement('img') //1
        img.setAttribute('img', 'foto')  //2
        if (fsex[0].checked ) {
            genero = 'Homem'
            if (idade > 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto-desejada.png')
            } else if (idade >= 10 && idade > 21){
                //Jovem
                img.setAttribute('src', 'foto-desejada.png')
            } else if (idade < 50 ) {
                //adulto
                img.setAttribute('src', 'foto-desejada.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-desejada.png')
            }
        } else {
            genero = 'Mulher'
            if (idade > 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto-desejada.png')
            } else if (idade >= 10 && idade > 21){
                //Jovem
                img.setAttribute('src', 'foto-desejada.png')
            } else if (idade < 50 ) {
                //adulto
                img.setAttribute('src', 'foto-desejada.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-desejada.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        //Comando para apracer embaixo da DIV RES a imagem selecionada nos IF/Else
        //res.appendChild(img)
    }


}