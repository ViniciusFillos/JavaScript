
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
        values.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        list.appendChild(item)
        res.innerHTML = ``
    } else {
        alert('Valor inválido ou já encontrado na listax')
    }
    num.value = ``
    num.focus()
}

function finalize() {
    if (values.length == 0) {
        window.alert(`Adicione valores antes de finalizar`)
    } else {
        let tot = values.length
        let max = values[0]
        let min = values[0]
        let sum = 0
        for (let pos in values) {
            if (values[pos] > max) {
                max = values[pos]
            }
            if (values[pos] < min) {
                min = values[pos]
            }
            sum += values[pos]
        }
        res.innerHTML = ``
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p> O maior valor informado foi ${max}</p>`
        res.innerHTML += `<p> O menor valor informado foi ${min}</p>`
        res.innerHTML += `<p> A soma dos valores é de ${sum}`
        res.innerHTML += `<p> A média dos valores é de ${sum/tot}`
    }
}

