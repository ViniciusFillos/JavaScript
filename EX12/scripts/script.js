function verificar() {
    
    var DateToday = new Date()
    var ano = DateToday.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.querySelectorAll('.radsex')
        var idade = ano - Number(fano.value)
        var gen =''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gen = 'Homem'
            if (idade<12) {
                //criança
                img.setAttribute('src', 'images/boy.png')
            } else if (idade < 21) {
                //joven
                img.setAttribute('src', 'images/teenager-boy.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'images/man.png')
            } else {
                //idoso
                img.setAttribute('src', 'images/old-man.png')
            }
        } else {
            gen = 'Mulher'
            if (idade<12) {
                //criança
                img.setAttribute('src', 'images/girl.png')
            } else if (idade < 21) {
                //joven
                img.setAttribute('src', 'images/teenager-girl.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'images/woman.png')
            } else {
                //idoso
                img.setAttribute('src', 'images/old-woman.png')
            }
        }
        res.innerHTML = `Detectamos o gênero ${gen} com ${idade} anos`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}