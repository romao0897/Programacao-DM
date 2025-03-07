let nome ="Romao"
let maiusculas = nome.toUpperCase(); 
let minusculas = nome.toLowerCase(); 
console.log(nome)
console.log(minusculas)
console.log(maiusculas)

function inverterString(str) {
    let arr = str.split("");
    arr.reverse();
    let stringInvertida = arr.join("");
    return stringInvertida;
}

const minhaString = "Romao"
const stringInvertida = inverterString(minhaString);
console.log(stringInvertida);

let substituir = nome.replace("R","B")
let substituir1 = nome.replace("O","R")
let substituir2 = nome.replace("M","U")
let substituir3 = nome.replace("A","N")
let substituir4 = nome.replace("O","A")

console.log(substituir)
console.log(substituir1)
console.log(substituir2)
console.log(substituir3)
console.log(substituir4)

