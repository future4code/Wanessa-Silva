// EXERCÍCIO 01
function inverteArray(array) {
  let tamanho = array.length;
  let esquerda = null;
  let direita = null;
  for (esquerda = 0, direita = tamanho - 1; esquerda < direita; esquerda += 1, direita -= 1) {
     let temporario = array[esquerda];
     array[esquerda] = array[direita];
     array[direita] = temporario;
  }
  return array
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let numerosPares = array.filter((numero) => {
    if(numero % 2 === 0){
      return true
    }
  })

  let numerosParesElevadosADois = numerosPares.map((numero) => {
    return numero**2
  })

  return numerosParesElevadosADois
}


// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let numerosPares = array.filter((numero) => {
    if(numero % 2 === 0){
      return true
    }
  })
  return numerosPares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNumero = 0
  
  for(let valor of array ) {
    if(valor > maiorNumero) {
      maiorNumero = valor
    }
  }
  return maiorNumero
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length  
}

// EXERCÍCIO 06

function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2 
  const booleano4 = !booleano3
  let resultado = [booleano1 && booleano2 && !booleano4, (booleano1 && booleano2) || !booleano3, (booleano2 || booleano3) && (booleano4 || booleano1), !(booleano2 && booleano3) || !(booleano1 && booleano3), !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3) ]

  return resultado
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let numerosPares = []
  let indice = 0
  
  while(numerosPares.length !== n){
    if(indice % 2 === 0) {
      numerosPares.push(indice)
    }
    indice++
  }
  return numerosPares
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  let triangulo = ''
  if(a === b && b === c && c === a){
    triangulo = 'Equilátero'
  }else if(a === b || b === c || c === a){
    triangulo = 'Isósceles'
  }else {
    triangulo = 'Escaleno'
  }
  return triangulo
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
