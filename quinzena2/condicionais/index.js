// ======================= Exercícios de interpretação de código ======================================

// =============Questão 01==============================
/*
   a)
    O código coleta o número fornecido pelo usuário, e verifica se ele é mútiplo de 2 através 
    do cáculo do resto de divisão igualando o resultado a 0, com  o resultado ele vai fazer o comparativo
    e dará o resultado.

   b) 
    Para os números múltiplos de 2

   c) 
    Para os números que não são múltiplos de 2   
*/


// =============Questão 02==============================
/*
a) 
 Serve para fazer um compativo entre fruta e valor, e informar qual o valor da fruta.

b) 
 O preço da fruta maça é R$ 2.25

c) 
 A mensagem impressa seria, 'O preço da fruta pera é R$ 5', pois é o último valor declarado antes do
break, que o comando que encerra.
*/

// =============Questão 03==============================
/* 
a) 
 A promeira linha está solicitando ao usuário que digite um número, e ao mesmo tempo já está transformando
 a resposta em Number, já que todo resultado de um prompt é uma String.

b) 
 Se o usuário digitar o número 10, a mesagem impressa será 'Esse número passou no teste', caso digite
 o número -10, a mensagem impressa será de erro.

c) 
  Sim, não existe uma variável de else dentro do escopo que associe os números menores do que 0
  a mensaguem que deve ser impressa nop console.
*/

// ======================= Exercícios de escrita de código ======================================

// =============Questão 01==============================

/* 
const idadeDoUsuario = Number(prompt('Digite a sua idade'))

if (idadeDoUsuario > 18) {
  console.log('Você pode dirigir')
} else {
  console.log('Você não pode dirigir')
}
 */

// =============Questão 02==============================

/* 
let turnoDoDia = prompt('Em qual turnmo você está? Digite M (matutino), V (Vespertino) ou N (Noturno)')

if (turnoDoDia === 'M'){
    console.log('Bom dia!')
}else if (turnoDoDia === 'V') {
    console.log ('Boa tarde!')}
        else{
            console.log('Boa noite!')
        }
*/
    
// =============Questão 03==============================
/* 
let turnoDoDia = prompt('Em qual turnmo você está? Digite M (matutino), V (Vespertino) ou N (Noturno)')
let mensagem
switch (turnoDoDia) {
  case "M":
    mensagem = 'Bom dia!'
    break;
  case "V":
    mensagem = 'Boa tarde!'
    break;
  case "N":
    mensagem = 'Boa noite!'
    break;
  
}
console.log(mensagem) 
*/

// =============Questão 04==============================

/*
let estiloDoFilme = prompt('Qual o gênero do filme?')
let valor = Number(prompt('Qual o valor do ingresso?'))

function filme(genero, valor) {
   let filme = estiloDoFilme === ('fantasia')
   let ingresso = valor <15 
    if (
        filme && ingresso
     ) {
        console.log('Bom filme!')
     } else {
        console.log('Escolha outro filme!') 
}
*/