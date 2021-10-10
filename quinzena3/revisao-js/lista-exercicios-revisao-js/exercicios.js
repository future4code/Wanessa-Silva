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
  let maiorNumero
  let menorNumero
  let maiorDivisivelPorMenor

  if (num1 > num2) {
    maiorNumero = num1
    menorNumero = num2
  } else {
    maiorNumero = num2
    menorNumero = num1
  }
  maiorDivisivelPorMenor = maiorNumero % menorNumero === 0

  const diferenca = maiorNumero - menorNumero
  return {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: maiorDivisivelPorMenor,
    diferenca: diferenca
  }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  let menor = Infinity
  let maior = -Infinity
  let segundoMenor = Infinity
  let segundoMaior = -Infinity
  let novoArray = []

  for (let i of array) {
    if (i < menor) {
      menor = i
    }
    if (i > maior) {
      maior = i
    }
  }
  for (let i of array) {
    if (i < segundoMenor && i !== menor) {
      segundoMenor = i
    }
    if (i > segundoMaior && i !== maior) {
      segundoMaior = i
    }
  }
  novoArray.push(segundoMaior)
  novoArray.push(segundoMenor)
  return novoArray
}


// EXERCÍCIO 11
function ordenaArray(array) {
  const numeros = array.length
  const ordem = numeros.sort()
  return ordem 
}

// EXERCÍCIO 12
function filmeFavorito() {
  const filme = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
  }
 return filme
}

// EXERCÍCIO 13
function imprimeChamada() {
  const filme = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
  }
 return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por 
 ${filme.diretor} e estrelado por ${filme.atores}}.`
}


// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  let retangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    area: lado1 * lado2
  }
    return retangulo
  }


// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
    return {
      ...pessoa,
      nome: 'ANÔNIMO'
    }
  }


// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  const maior18 = arrayDePessoas.filter((pessoa) => {
    return pessoa.idade >= 18
  })
    return maior18
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  const menor18 = arrayDePessoas.filter((pessoa) => {
    return pessoa.idade < 18
  })
  return menor18
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
