// //comentário de linha simples

// // comentar tudo: crt + ;
// // comentário de multiplas linh
// // mostrar um dado no console:
// // console.log("Hello World!")
// // console.log(10 + 34)

// // console.log('Hell


// // criação de váriaveis

// var nome = "Noah"
// // console.log(nome)

// // váriaveis locais, só podem ser usadas uma vez
// let idade = 90
// // console.log(idade)

// // constate, que não podem ser mudadas
// const pi = 3.1415
// // console.log(pi)

// // váriaveis podem começar com letras minusculas, _ , $ , usar o padrao camelCase

// var nomeDoProfessor = "David"
// // console.log(nomeDoProfessor)

// // var NOME = "Tony"
// // console.log(NOME == nome)


// // Tipos de dados no JavaScript

// /**
//  * String - texto - com aspas ou duplas aspas
//  * Numbers - números - inteiro ou decimais
//  * Booleans - true or false
//  * Array - lista - estrutura que armazena coleções de dados
//  * Obejects - descreveme estruturas complexas - 
//  * null - nulo
//  * NaN - not a number 
//  * undefined - indefinido
//  */

// // console.log(typeof(nome)) // fala o tipo de dado da variável
// // console.log(typeof(pi)) // fala o tipo de dado da variável

var cidadeDoBrasil = ["São Paulo", "Salvador", "Curitiba", "Florianopólis", "Pernabuco", "Recife", "Rio de Janeiro"] // array

// // console.log(cidadeDoBrasil)
// // index  - posiçao
// // console.log(cidadeDoBrasil[0])

// idade = '800'

// // transformando Texto em Número
// var idadeNumber = Number(idade)
// // console.log(typeof(idadeNumber))

// // template string (concatenação) - ${variavel}
// // console.log(`Sou ${nome}, tendo ${idade} anos, e moro em ${cidadeDoBrasil[3]}`)


// name = "Chapeuzinho Vermelho"
// age = 52
// casada = true

// // console.log(`Sou ${name}, tendo ${age} anos, e moro em ${cidadeDoBrasil[6]}`)



// // Operadores Matemáticos

// // soma
// var a = 8 + 9

// // multiplicaçao
// var b = 9 * 5

// // menos 
// var c = 40 - 7

// // divisao
// var d = 80/5

// // resto
// var e = 7 % 2

// // incremento
// var f = 9
// f++
// g = f--

// f =+ 9 

// // console.log(a,b,c,d,e,f,g)


// // operadores lógicos
// /**
//  * and(&&) - e
//  * or(||) - ou
//  * not(!) - não
//  */

// // console.log(false && false)


// console.log((a+b+c+d)/4)

//porçao de código que executava uma qtde de código
// function boasVindas(){
//   console.log("Oláaaaaaaa")
// }

// boasVindas()

// function somar(n1, n2){
//   console.log(n1+n2)
// }

// somar(3,2)


//função com retorno

// function menos(n1, n2){
//   return n1 - n2
// }

// menos(10, 5)
// console.log(menos(6, 1))

// arrow function (função seta)

// const sum = (firstParamt, secondParamt) => {
//   return firstParamt + secondParamt
// }

// console.log(sum(5, 7))

// laço for

// for (let num = 1; num <=10 ; num++){
//   console.log(num*5)
// }

// if = se 
var idade = 80

// if(idade < 18){
//   console.log("Você é de menor.")
// } else if(idade >= 18 && idade < 60) {
//   console.log("Você é contribuinte do INSS.")
// } else {
//   console.log("Voce tá curtindo sua aposentadoria!")
// }

// while (idade < 90){
// idade++
// console.log(idade)
// }


var cidade = "Itaquequecetuba"
// ver qtde de letras
// console.log(cidade.length)
// deixar todas letras maiusculas
// console.log(cidade.toUpperCase())
// deixar minusculas
// console.log(cidade.toLowerCase())

// console.log(cidadeDoBrasil.length) // pega o 1
// console.log(cidadeDoBrasil.push("Mogi das Cruzes")) // 

// cidadeDoBrasil.shift()
// console.log(cidadeDoBrasil)

// let semaforo = ['vermelho', 'amarelo', "verde"]

// //para cada item no semaforo
// semaforo.forEach(teste =>{
//   console.log(teste)
// })


console.log("1+1".length)