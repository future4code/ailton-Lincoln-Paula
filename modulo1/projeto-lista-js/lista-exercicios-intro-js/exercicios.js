// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt('Digite a altura do retângulo'))
  const largura = Number(prompt('Digite a largura do retângulo'))


  const contaBasica = altura*largura

  console.log(contaBasica)}


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Qual ano atual?'))
  const dataNascimento = Number(prompt('Qual seu ano de nascimento?'))
  const continhaBasica2 = anoAtual - dataNascimento
  console.log(continhaBasica2)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const continhaBasica3 = peso/(altura*altura)
  return continhaBasica3
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Qual seu nome?")
  const idade = prompt("Qual sua idade?")
  const email = prompt("Qual seu email")
console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt('Qual sua cor fav?')
  const cor2 = prompt('Qual sua segunda cor fav?')
  const cor3 = prompt('Qual sua terceira cor fav?')
  console.log([cor1, cor2, cor3])

}
// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  let continhaBasica4 = custo/valorIngresso
 return continhaBasica4
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  let comparacao2 = string1.length === string2.length
  return comparacao2
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
 return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
 let ultiElemento = array.pop()
 return ultiElemento
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
const array1 = array[0]
array[0] = array[[array.length-1]]
array[[array.length-1]] = array1
return array}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  
let comparacao4 = string1.toUpperCase() === string2.toUpperCase()
return comparacao4
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
// let anoAtual = prompt("Qual o ano atual?")
// let  anoNascimento = prompt("Qual seu ano de nascimento?")
// let  dataEmissao = prompt("Quando foi emitido sua identidade?")
// let caso1 = anoAtual - anoNascimento <= 20
// AINDA FAZENDO !!!!!!!!!

  console.log()
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}