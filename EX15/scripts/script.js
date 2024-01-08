function tabuada () {

    let num = document.querySelector('#idnum')
    let res = document.querySelector('#res')


    if (num.value.length == 0) {    
        alert(`Por favor digite um número!`)
    } else {
        let n = Number(num.value)
        res.innerHTML = ``
        for (i = 1; i < 11; i ++) {
            let item = document.createElement('option')
            item.value = `tab${i}`
            item.text = `${n} X ${i} = ${i*n}`
            res.appendChild(item)
        }
    }
}