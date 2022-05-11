//INTERPRETAÇÃO DE CÓDIGO
//EXERCICIO 1
// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)  retornará false, pois a váriavel const bool2 tem um valor de false

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado)   continuará retornando false, pois ao comparar true com false, continua dando false

// resultado = !resultado && (bool1 || bool2)
// console.log("c. ", resultado)  retornará true pois a lógica dentro do parenteses da true, pois bool1 é true 
// e a lógica ou, retornara true quando temos pelo menos um dos valores true, temos a inversão de valores da várivavel
// resultado, que a principio era false e se tornou true, por fim temos a comparação true && true, o que retorna true.

// console.log("d. ", typeof resultado) retornará boolean pois os metadados contidos na váriavel são váriaveis que 
// são definidas por valores booleano  


// EXERCICIO 2 e 3


// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

/*Neste exercicio o prompt acaba colocando aspas e transformando nosso resultado númerico em string,
então mesmo que o input tenha sido número ou um valor booleano, o output será string, acontecendo assim a concatenação
da primeira váriavel com a segunda e não sua soma de fato.

a solução seria transformar o prompt em um valor númerico com Number(())
*/
//  let primeiroNumero = Number(prompt("Digite um numero!"))
//  let segundoNumero = Number(prompt("Digite outro numero!"))

//  const soma = primeiroNumero + segundoNumero
//  console.log(soma)


//ESCRITA DE CÓDIGO
//EXERCICIO 1

// let suaIdade = Number(prompt("Digite sua idade!"))
// let idadeAmigo = Number(prompt("Digite a idade do seu melhor amigo!"))
// let comparando1 = suaIdade >= idadeAmigo     
// console.log("Sua idade é maior do que a do seu melhor amigo?", comparando1)
// let comparando2 = suaIdade <= idadeAmigo
// console.log("A idade do seu amigo é maior?", comparando2)
// let diferenca = suaIdade - idadeAmigo
// console.log("A diferença de idade é:", diferenca)


//EXERCICIO 2

// let perguntarIdade = Number(prompt("Qual sua idade ?"))
// console.log("sua idade em meses é:", perguntarIdade * 12)
// console.log("sua idade em dias é:", perguntarIdade * 48)
// console.log("sua idade em horas é:", perguntarIdade *8760)


//EXERCICIO 3

// let pergunta1 = Number(prompt("Me fale um número"))
// let pergunta2 = Number(prompt("Agora outro"))
// console.log("O primeiro numero é maior que segundo?", pergunta1 > pergunta2)
// console.log("O primeiro numero é igual ao segundo?", pergunta1 === pergunta2)
// console.log("O primeiro numero é divisível pelo segundo?", (pergunta1%pergunta2) === 0)
// console.log("O segundo numero é divisível pelo primeiro?", (pergunta2%pergunta1) === 0)
