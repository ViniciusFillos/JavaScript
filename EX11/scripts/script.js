
function carregar() {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.getElementById('imagem')
    var DateToday = new Date()
    var hora = DateToday.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora<13) {
        //BOM DIA
        img.src="images/morning.png"
        document.body.style.background = 'var(--cor08)'
    } else if(hora<19) {
        //BOA TARDE
        img.src = "images/afternoon.png"
        document.body.style.background = 'var(--cor07)'
    } else {
        //BOA NOITE
        img.scr ='images/evening.png'
        document.body.style.background = 'var(--cor06)'

    }
}

