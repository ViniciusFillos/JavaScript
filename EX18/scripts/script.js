
let num = document.querySelector('input#ID_num')
let list = document.querySelector('select#ID_list')
let res = document.querySelector('div#res')
let values = []


function isNumero(n) {
    if (Number(n) >=1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if (isNumero(num.value) && !inList(num.value, values)) {
        
    } else {
        alert('Valor inválido ou já encontrado na listax')
    }
}

