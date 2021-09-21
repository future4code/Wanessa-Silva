// Exemplos

// Exercício 0A
function soma() {
    // escreva seu código aqui
    const num1 = prompt('Digite o primeiro número')
    const num2 = prompt('Digite o segundo número')

    console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
    // escreva seu código aqui
    const mensagem = prompt('Digite sua mensagem')

    console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
    const altura = Number(prompt('Digite uma altura'))
    const largura = Number(prompt('Digite uma largura'))
    const areaRetangulo = altura * largura
    console.log(areaRetangulo)
}

// Exercício 2
function imprimeIdade() {
    const anoAtual = Number(prompt('Digite o ano atual'))
    const anoDeNascimento = Number(prompt('Digite o ano do seu nascimento'))
    const suaIdade = anoAtual - anoDeNascimento
    console.log(suaIdade)
}

// Exercício 3
function calculaIMC() {
    const peso = Number(prompt('Digite seu peso'))
    const suaAltura = Number(prompt('Digite sua altura'))
    const imc = peso / (suaAltura * suaAltura)
    console.log(imc)
}

// Exercício 4
function imprimeInformacoesUsuario() {
    const nome = prompt('Digite seu nome')
    const idade = Number(prompt('Digite sua idade'))
    const email = prompt('Digite seu email')
    console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// Exercício 5
function imprimeTresCoresFavoritas() {
    const cor1 = prompt('Digite sua cor favorita')
    const cor2 = prompt('Digite mais uma cor favorita')
    const cor3 = prompt('Digite mais uma cor')
    const cores = [cor1, cor2, cor3]
    console.log(cores)
}

// Exercício 6
function retornaStringEmMaiuscula() {
    const mensagem = prompt('Digite uma mensagem')
    console.log(mensagem.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
    const valorDoEspetaculo = prompt('Digite o valor do espetáculo')
    const valorIngresso = prompt('Digite o valor do ingresso')
    console.log(Number(valorDoEspetaculo) / Number(valorIngresso))
}

// Exercício 8
function checaStringsMesmoTamanho() {
    const mensagem1 = prompt('Digite uma mensagem')
    const mensagem2 = prompt('Digite novamente uma mensagem')
    const mesmoTamanho = mensagem1.length === mensagem2.length
    console.log(mesmoTamanho)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
    const msg1 = prompt('Digite uma mensagem')
    const msg2 = prompt('Digite novamente uma mensagem')
    const checaIgualdade = (msg1.toLowerCase() == msg2.toLowerCase())
    console.log(checaIgualdade)
}

// Exercício 10
function checaRenovacaoRG() {
    const anoQueEstamos = Number(prompt('Digite o ano atual'))
    const seuAnoDeNascimento = Number(prompt('Digite o ano do seu nascimento'))
    const anoEmissaoId = Number(prompt('Digite o ano de emissão da sua identidade'))

    const suaIdade = anoQueEstamos - seuAnoDeNascimento
    const anosEmissao = anoQueEstamos - anoEmissaoId

    const deveRenovar5em5 = (suaIdade <= 20) && (anosEmissao >= 5)
    const deveRenovar10em10 = ((suaIdade >= 21) && (suaIdade <= 50)) && (anosEmissao >= 10)
    const deveRenovar15em15 = (suaIdade > 50) && (anosEmissao >= 15)

    console.log(deveRenovar5em5 || deveRenovar10em10 || deveRenovar15em15)
}

// Exercício 11
function checaAnoBissexto() {
    const ano = Number(prompt('Digite um anos'))
    const anoBissexto = ano % 400 === 0
    const anoBissexto1 = (ano % 4 === 0) && !(ano % 100 === 0)
    const ehAnoBissexto = anoBissexto || anoBissexto1
    console.log(ehAnoBissexto)
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
    const condicao1 = prompt('Você tem mais de 18 anos?')
    const condicao2 = prompt('Você possui ensino médio completo?')
    const condicao3 = prompt('Você possui disponibilidade exclusiva durante os horários do curso?')
    const inscricaoValida = (condicao1.toLowerCase() == 'sim') && (condicao2.toLowerCase() == 'sim') && (condicao3.toLowerCase() == 'sim')
    console.log(inscricaoValida)
}