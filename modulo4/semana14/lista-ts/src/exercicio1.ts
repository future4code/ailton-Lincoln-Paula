// Crie um função que receba uma string com o nome e outra string com uma data de
//  nascimento (ex.: “24/04/1993”). A função deve separar o dia, o 
// mês e ano e retornar uma string no seguinte formato: 

// "Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}" 

const returnString = (nome:string, data:string):string =>{

const dataDatrada = data.split('/')

return `Olá me chamo ${nome}, nasci no dia ${dataDatrada[0]} do mês de ${dataDatrada[1]} do ano de ${dataDatrada[2]}`

}

console.log(returnString('lincoln', '30/07/2000'))