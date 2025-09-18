import Imc  from "./IMC.js"


let list = [
    new Imc ("Seb Chabal", 135, 171),
    new Imc ("Escaladeuse", 45, 168),
    new Imc ("JoJo", 300, 200),
    new Imc ("Gontrand", 90, 175),
    new Imc ("Collonel Clock", 200, 175),
    new Imc ("Josiane de la vega", 99, 155),
]


for (let i = 0; i < list.length; i++){
    list[i].display();
}

console.log("coucou");