// ==============================Exercícios de interpretação de código==================================

// ======================Questão 01=============================

//Vai ser impresso no console:  
/*
objeto 0 -  nome: "Amanda Rangel", apelido: "Mandi" 
objeto 1 -  nome: "Amanda Rangel", apelido: "Mandi" 
objeto 2 -  nome: "Amanda Rangel", apelido: "Mandi" 
*/

// ======================Questão 02=============================

//Vai ser impresso no console somente os nomes, em formato de array
/*
0: "Amanda Rangel"
1: "Laís Petra"
2: "Letícia Chijo
*/

// ======================Questão 03=============================

//Vai ser impresso no console somente os itens que forem diferentes de 'Chijo:  
/* 
nome: "Amanda Rangel", apelido: "Mandi"
nome: "Laís Petra", apelido: "Laura"
*/

// ==============================Exercícios de escrita de código==================================

// ======================Questão 01=============================

// ===============letra a=====================
/*
const pets = [
  { nome: "Lupin", raca: "Salsicha"},
     { nome: "Polly", raca: "Lhasa Apso"},
     { nome: "Madame", raca: "Poodle"},
     { nome: "Quentinho", raca: "Salsicha"},
     { nome: "Fluffy", raca: "Poodle"},
     { nome: "Caramelo", raca: "Vira-lata"},
  ]
 let nomesDoguinhos = pets.map((dog) => {
     return dog.nome
 })

 console.log(nomesDoguinhos)
*/

// ===============letra b=====================
/*
 let dogSalsicha = pets.filter((salsicha) => {
     if(salsicha.raca === "Salsicha") {
         return true
     }
 })
 console.log(dogSalsicha)
*/


// ===============letra c=====================
/*
 let dogPoodle = pets.filter((poodle) => {
     if(poodle.raca === "Poodle") {
         return true
     }
 })

 let msg = dogPoodle.map((dog) => {
     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${dog.nome}!`
 })

 console.log(msg)
*/


// ======================Questão 02=============================

// ===============letra a=====================
/*
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 let nomesProdutos = produtos.map((produto) => {
    return produto.nome
})

console.log(nomesProdutos)
*/

// ===============letra b=====================
/*
let produtosDesconto = produtos.map((produto) => {
    let desconto = produto.preco *5/100
    let produtoComDesconto = produto.preco - desconto

    let produtos = [produto.nome, produtoComDesconto]
    return produtos    
})

console.log(produtosDesconto)

let catBebidas = produtos.filter((produto) => {
    if(produto.categoria === "Bebidas") {
        return true
    }
})
console.log(catBebidas)
*/

// ===============letra c=====================
/*

let nomeYpe = produtos.filter((produto) => {
    if(produto.nome.includes("Ypê")) {
        return true
    }
})

console.log(nomeYpe)
*/

// ===============letra d=====================
/*
let compre = nomeYpe.map((produto) => {
    return `Compre ${produto.nome} por ${produto.preco}`
})

console.log(compre)
*/