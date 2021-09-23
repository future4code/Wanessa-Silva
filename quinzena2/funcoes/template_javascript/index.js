// ==================== Exercícios de interpretação de código ========================================

// =========================== Questão 1 ================================

/* a- Irá ser impresso 10 e 50
   b- Não iria aparecer nada, pois o que imprime as informaçõe no console é o console.log, porém 
   a função minhaFuncao terá a mesma validade.   */


// =========================== Questão 2 ================================
/*
a- toLowwerCase deixa todo o conteúdo em letras minúsculas.
includes verifica se a palavra escolhida está presente no texto.
b- EU GOSTO DE CENOURA - true
   CENOURA É BOM PRA VISTA - true
   CENOURAS CRESCEM NA TERRA - false    
*/

// ==================== Exercícios de escrita de código ================================================

// =========================== Questão 1 ================================

//Letra a
/*
function imprimirInformacao (){
    console.log("Eu sou Wanessa, tenho 27 anos, moro no Ceará e sou estudante Labenu.")
}
imprimirInformacao()    
*/

//Letra b
/*
function minhaInformacao (){
    const nome = 'Wanessa'
    const idade = 27
    const cidade = 'Maranguape'
    const profissao = 'psicóloga'
    console.log (`Eu sou ${nome}, tenho ${idade}, moro em ${cidade}, e sou ${profissao}`)
}
minhaInformacao()   
*/

// =========================== Questão 2 ================================

//Letra a
/*
function soma (num1,num2){
    return num1 + num2
}
console.log (soma(10,35))    
*/

//Letra b
/*
function igualMaior (){
    const num1 = 10
    const num2 = 35
    const resultado = (num1 >= num2)
    console.log (resultado)
}
igualMaior()     
*/

//Letra c
/*
function par (){
    const numpar = (15 % 2 === 0)
    console.log (numpar)
}
par()    
*/

//Letra d
/*
function mensagem(texto) {
    const textoModificado = texto.toUpperCase();
    const tamanhoDoTexto = texto.length;
    return console.log(`${textoModificado} tem ${tamanhoDoTexto} caracteres.`);
  }
  mensagem('Eu gosto de chocolate')
*/

// =========================== Questão 3 ================================
/*
function opSoma(num1, num2) {
  return num1 + num2;
}
function opDivisao(num1, num2) {
  return num1 / num2;
}
function opSubtracao(num1, num2) {
  return num1 - num2;
}
function opMulti(num1, num2) {
  return num1 * num2;
}
const valor1 = Number(prompt('Digite um número'))
const valor2 = Number(prompt('Digite outro número'))
console.log('O resultado da soma é', opSoma(valor1, valor2))
console.log('O resultado da divisão é', opDivisao(valor1, valor2))
console.log('O resultado da subtração é', opSubtracao(valor1, valor2))
console.log('O resultado da multiplicação é', opMulti(valor1, valor2))
*/