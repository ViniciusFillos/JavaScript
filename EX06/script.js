var idade = 18

var txt = (`Você tem ${idade} anos e `)

if (idade < 16) {
    txt += 'não vota'
    console.log(`${txt}`)
} else if (idade < 18 || idade > 65) {
    txt += 'tem voto opicional'
    console.log(`${txt}`)
} else {
    txt += 'tem voto obrigatório' 
    console.log(`${txt}`)
}