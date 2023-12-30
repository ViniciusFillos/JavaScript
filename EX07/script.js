var DateToday = new Date();

var hours = DateToday.getUTCHours();

console.log(`Agora são exatamente ${hours} horas`)

if (hours < 12){
    console.log(`Bom dia!`)
} else if (hours < 18){
    console.log(`Boa Tarde!`)
} else {
    console.log(`Boa Noite!`)
}