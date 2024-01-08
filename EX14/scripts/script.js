function contar () {
    var inicio = document.querySelector('input#idin')
    var fim = document.querySelector('input#idfim')
    var passo = document.querySelector('input#idpass')
    var res = document.querySelector('div#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível Contar!'
       // alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando... <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f) {
            alert('Passo inválido! Cosiderando Passo 1')
            p = 1
        }
        if (i < f) { //contagem crescente
            for (let c = i; c <= f; c += p){    
                res.innerHTML += ` ${c} 👉`
            }
        } else { //contagem decrecente
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} 👉`
            }
        }
    res.innerHTML += '🏴'
    }
}