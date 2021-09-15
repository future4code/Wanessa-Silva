
/* 1. Leia o código abaixo. Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.

jsx
const bool1 = true  
const bool2 = false
const bool3 = !bool2 // true

let resultado = bool1 && bool2
console.log("a. ", resultado) 
   // a. false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado)     
   // b. false

resultado = !resultado//true && (bool1 || bool2)// true
console.log("c. ", resultado)      
   // c. true

console.log("d. ", typeof resultado) */  
   // d. booleano


   /* 2. Seu colega se aproxima de você falando que o código dele não funciona como devia.  
   Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console?

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

// não será impresso nada no console, pois não se pode somar dois strings. */

/* 3. Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, 
de fato, a soma dos dois números. */

/* Ele deve digitar a palavra "Number" antes da palavra "prompet" e depois colocar tudo entre parênteses, exeto
a palavra "Number", pois assim ele tranforma o resultado obtido da resposta de string, para number, podendo 
assim realizar a soma. 

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))  */

//Escrita de código

/*let suaidade = Number(prompt ("Qual é a sua idade?"))
let idadeamigo = Number(prompt ("Qual a idade do seu melhor amigo?"))
console.log (suaidade)
console.log (idadeamigo)
console.log ("Sua idade é maior do que a do seu melhor amigo?")
console.log (suaidade > idadeamigo)
let diferença = (suaidade - idadeamigo)
console.log (diferença)*/



//let numpar = Number(prompt("Digite um número par"))
//let restodivisão = (numpar%2)
//console.log (restodivisão)  
//sempre que o número é par, o resultado é 0
//sempre que é nserido um número impar, o resultado é 1

/*let idade = Number(prompt("Qual a sua idade?"))
console.log(idade)
let meses = idade * 12
console.log("Você tem", meses, "meses de idade")

let idadeDias = idade * 365
console.log("Você tem", idadeDias, "dias de idade")

let idadeHoras = idade * 8760
console.log("Você tem", idadeHoras, "horas de idade")*/


/*let numero1 = Number(prompt ("Digite um número"))
console.log (numero1)
let numero2 = Number(prompt ("Digite novamente um número"))
console.log (numero2)
let maior1 = numero1 > numero2
console.log ("O primeiro numero é maior que segundo?", maior1)
let maior2 = numero1 === numero2
console.log ("O primeiro numero é igual ao segundo?", maior2)*/


/*let divi1 = numero1 % numero2 === 0
console.log("O primeiro número é divisível pelo segundo?", divi1)
let divi2 = numero2 % numero1 === 0
console.log("O segundo número é divisível pelo primeiro?", divi2)*/
