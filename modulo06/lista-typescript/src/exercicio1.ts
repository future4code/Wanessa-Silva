//Exercício 1 
function info(nome: string, data: string): string {
  const dataArray: string[] = data.split('/')

  return `Olá me chamo ${nome}, nasci no dia ${dataArray[0]} do mês ${dataArray[1]} do ano de ${dataArray[2]}`
}

console.log(info('Wanessa', '30/06/1994'));