// // INTERPRETAÇÃO DE CÓDIGO
// // EXERCICIO 1

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// //iMPRIMIRÁ OS VALORES INPUT VARIAVEL (2, 10) MULTIPLICADOS POR 5
// //NÃO IRIA IMPRIMIR NADA, POR FALTA DA NÃO DECLARAÇÃO DOS PARAMETROS DA FUNÇÃO.

// EXERCICIO 2

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// //A)PRIMEIRAMENTE TEMOS UMA PERGUNTA AO USUARIO PEDINDO UMA ENTRADA DE UM TEXTO, ESSA FUNÇÃO RETORNARÁ O TEXTO EM 
// //MINUSCULO, E PROCURARÁ A PALAVRA CENOURA NO TEXTO DIGITADO NO PROMPT, SE HOUVER, O CONSOLE IMPRIMI TRUE,
// //SE NÃO FALSE

// //B) Eu gosto de cenoura - True
// // CENOURA é bom pra vista - True
// // Cenouras crescem na terra - (Achei que era false, executei no programa e deu true, fica a dúvida pra ser resolvida!)


//ESCRITA DE CÓDIGO
//EXERCICIO 1
// A)
// function semParametro (){
//     console.log(`"Eu sou Lincoln, tenho 21 anos, moro em Santos Dumont e sou estudante da Labenu."`)
//     return semParametro
    
// }
// semParametro()

// B)
// function dadosPessoais(nome, idade, cidade, profissao){
//     let nomePessoal = "Lincoln"
//     let idadePessoal = 21
//     let cidadePessoal = "Santos Dumont"
//     let profissaoPessoal = "Programador full-stack"
//     const juntaDados = `Eu sou ${nomePessoal}, tenho ${idadePessoal} anos, moro em ${cidadePessoal} e sou ${profissaoPessoal}.`
//     return console.log(juntaDados)
// }
// dadosPessoais()  

//EXERCICIO 2

//A)SOMA DE NÚMERO:

// function soma(num1, num2){

//      let somaDosNumeros = num1 + num2
    
//      return console.log(somaDosNumeros)
     
    
// }
// soma(5,100)

//B) COMPARAÇÃO MAIOR OU IGUAL:

// function soma(num1, num2){
//     let comparação1 = num1 >= num2
//     return console.log(comparação1)
// }
// soma(30,3)

//C) PAR OU IMPAR:

// function parOuNao(num1){
//     let parOuImpar = (num1 % 2) === 0
//     return console.log(parOuImpar)
// }
// parOuNao(4)

// D) TAMANHO DA FRASE E MAIUSCULA

// function tamanhoFrase(string){
//     let perguntaAleatoria = prompt("Digite uma frase")
//     perguntaAleatoria = frase1
//     return console.log(frase1.length, frase1.toUpperCase())   
// }
// tamanhoFrase()


//EXERCICIO 3

// function doisNumeros(num1, num2){
//     let pergunta1 = Number(prompt('Insira um número'))
//     let pergunta2 = Number(prompt(`Insira outro número`))
//     num1 = pergunta1
//     num2 = pergunta2
//         let soma = num1 + num2
//         let subtracao = num1 - num2
//         let divisao = num1 / num2
//         let multipli = num1 * num2
 
//         return console.log(`A soma entre os número é ${soma}
//     A subtração entre os números é ${subtracao}
//     A divisão entre os números é ${divisao}
//     A multiplicação entre os números é ${multipli}`)

// }
// doisNumeros()

