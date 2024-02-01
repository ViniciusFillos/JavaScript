let amigo = {name:`Vinicius`,
gender:`Man`,
weight: 69.3,
engordar(w=0) {
    console.log(`gained ${w} Kg`)
    this.weight += w
}}

console.log(`weights ${amigo.weight}`)

amigo.engordar(8)
console.log(`weights ${amigo.weight}`)
