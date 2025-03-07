// comentário de uma linha

/* 
  comentário em bloco
*/

// váriaveis
// var -> não usa no dia o dia
let nome = "Gustavo";
let idade = 20;

// nome = 'teste'
// idade = 22; não é possivel reatribuir uma constante

// Operadores aritmeticos
const soma = 2 + 2
const substracao = 2 - 2
const multiplicacao = 2 * 2
const divisao = 2 / 2
const resto = 3 % 2

// Operadores de Comparação
const igual = 2 == 2
const diferente = 3 != 2
const maior = 3 > 2
const menor = 2 < 3
const maiorOuIgual = 2 >= 2
const menorOuIgual = 3 <= 2


// Estruturas condições
idade = 16;

if (idade >= 18) {
  console.log("Maior de idade")
}

if (idade >= 18) {
  console.log("Maior de idade")
} else {
  console.log("Menor de idade")
}

// Operador Ternário

const mensagem = idade >= 18 ? "Maior de Idade" : "Menor de Idade"
console.log("Mensagem -> ", mensagem)


// Arrays - Listas

const frutas = ["Maçã", "Banana", "Uva"]
console.log(frutas[0])
console.log(frutas[1])

console.log("Quantas frutas tem no array?")
console.log(frutas.length)

frutas.push("Laranja")
console.log("E agora, quantas frutas tem no array?")
console.log(frutas.length)

frutas.forEach(fruta => console.log(fruta))

frutas.pop()
console.log(frutas)

// objetos 
let pessoa = {
    nome: "gustavo",
    idade: 18,
    peso: 60,
    altura: 170
}

console.log (pessoa.nome)
pessoa.idade = 40
console.log(pessoa.idade)

// desatribuição de objetos
const { peso,altura } = pessoa
console.log(peso)
console.log(altura)

// propagação de objeto 
const endereco = {
    cidade: "brasilia",
    uf: "DF"
}

const pessoaCompleto = {
    ...pessoa,
    ...endereco
}

console.log(pessoaCompleto)

// Funções 

function somar(numA, numB) {
    const resultado = numA + numB
    console.log(resultado)
}

// Uso
somar (2,2)
somar (3,3)
somar (10,5)

// funções anonimas

const subtrair = function (numA, numB){
    const resultados = numA - numB
    console.log(resultados)
}

subtrair(4,2)
const multiplicar = (numA,numB) => numA * numB 
multiplicar(2,2)

// importar uma função de outro arquivo

import {calcularIMC} from "./CalcularIMC"
const res = calcularIMC(80,170)

console.log(res)