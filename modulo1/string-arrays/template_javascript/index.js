//INTERPRETAÇÃO CÓDIGO
//EXERCICIO 1

// let array
// console.log('a. ', array) // vai imprimir no console o conteúdo contido na array

// array = null

// console.log('b. ', array) // imprimirá mensagem de null, pois não estamos colocando nenhum 
// tipo de dado primitivo na array

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// console.log('c. ', array.length) //vai imprimir o tamanho da array que no caso é o valor 11

// let i = 0
// console.log('d. ', array[i]) //imprimirá no indice o conteúdo da array, na posição 0, que é 3

// array[i+1] = 19
// console.log('e. ', array) //estamos trocando o valor contido na posição (1) por o valor (19)

// const valor = array[i+6]
// console.log('f. ', valor) //imprimirá a posição do indice atual + 6 posições = 9



//EXERCICIO 2


// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)   Se o input for "Subi num ônibus em Marrocos"
// o output vai ser a frase toda maiuscula e com o caracter (a) substituido pelo caracter (i), a frase ficará
// "SUBI NUM ÔNIBUS EM MIRROCOS"*/ 


//EXERCICIO DE ESCRITA DE CÓDIGO

//EXERCICIO 1

// let perguntaNome = prompt(`Qual seu nome?`)
// let perguntaEmail = prompt(`Qual seu e-mail?`)
// console.log(`O email ${perguntaEmail} foi cadastrato com sucesso. Seja bem-vinda(o), ${perguntaNome}!`)


//EXERCICIO 2


// const arrayTeste = ["cafe", "pão", "milho", "feijão", "suco"]
// console.log(arrayTeste)
// console.log(`Essas são as minhas comidas preferidas: ${arrayTeste[0]}
// ${arrayTeste[1]}
// ${arrayTeste[2]}
// ${arrayTeste[3]}
// ${arrayTeste[4]}`)
// const pergunta3 = prompt("Qual sua comida favorita?")
// arrayTeste[1] = pergunta3
// console.log(arrayTeste)
// UUUUUUUUUUUUUUU CONSEGUI CHAMAAAAAAAAAAAAA


//EXERCICIO 3

// let listaDeTarefas = []
// let perguntas1 = prompt("Me diga uma tarefa essencial no seu dia-a-dia")
// let perguntas2 = prompt("Me diga outra tarefa essenciai no seu dia-a-dia")
// let perguntas3 = prompt("Me diga mais uma tarefas essencial no seu dia-a-dia")

// listaDeTarefas.push(perguntas1, perguntas2, perguntas3)
// console.log(listaDeTarefas)

// let removendoElemento = Number(prompt("Digite uma tarefa ja realizada: 0, 1 ou 2"))
// listaDeTarefas.splice(removendoElemento,1)
// console.log(listaDeTarefas)

// Tive um pouco de dificuldade na hora de dar o push na array, pois estava criando apenas uma prompt que 
// perguntava 3 coisas, o úsuario colocava as três, mas minha array ficava com o tamanho (length), apenas de 1
// dando erro na hora de remover algum elemento com splice, fiz 3 prompt's com perguntas e consegui resolver o problema

