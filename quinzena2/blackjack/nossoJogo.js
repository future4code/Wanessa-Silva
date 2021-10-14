/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log ('Boas vindas ao jogo de Blackjack!')
if(confirm('Quer iniciar uma nova rodada?')) {
	console.log ('Iniciando uma nova rodada')
} else {
	console.log('O jogo acabou!')
}

const carta1Usuario = comprarCarta()
const carta2Usuario = comprarCarta()
const carta1Computador = comprarCarta()
const carta2Computador = comprarCarta()

const somaUsuario = (carta1Usuario.texto + carta2Usuario.texto)
const somaComputador = (carta1Computador.texto + carta2Computador.texto)

const somaUsuario1 = carta1Usuario.valor + carta2Usuario.valor
const somaComputador1 = carta1Computador.valor + carta2Computador.valor

console.log("Usúario - Cartas:" + somaUsuario + " Pontuação:" + somaUsuario1)
console.log("Computador - Cartas:" + somaComputador + " Pontuação:" + somaComputador1)

if (somaUsuario1 > somaComputador1){
   console.log('Você ganhou!')
}else if(somaComputador1 > somaUsuario1){
   console.log('Você perdeu!')
}else if (somaUsuario1 === somaComputador1){
   console.log('Vocês Empataram')
}
