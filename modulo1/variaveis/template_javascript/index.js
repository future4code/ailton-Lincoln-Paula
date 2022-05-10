//EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO
/* EXERCICIO 1
let a = 10
let b = 10

console.log(b)

b = 5

console.log(a, b)  

foram declarados duas váriaveis let, onde será imprimido no console na linha 5
o valor da várivel (b) que é 10, na linha 7 ocorre uma alteração no valor da váriavel (b), que passa 
a ser 5, agora na linha 9 são imprimidos o valor da váriavel (a) que é 10 e também o novo valor
atribuido na váriavel (b) que agora é 5, ou seja, 10, 5 */

/*  EXERCICIO 2
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)

neste exercício, foram declarado duas várias let, onde seu valor podeser mudado conforme o código é lido
na linha 19, temos que o valor de (c) é o mesmo que o valor da váriavel (a) já declarada que é 10, então
(c) é igual a 10, na linha 20 temos que (b) é o mesmo valor de (c), ou seja ambos 10, e por último na linha
temos que (a) vale (b) mudando seu valor inicial que inicialmente era 20, ou seja, 10, 10 ,10. */

/*EXERCICIO 3

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

O exercicio abre duas caixas de perguntas onde recebe as horas que o indivíduo trabalha por dia
e também recebe o valor de quanto ele recebe por dia e retorna uma mensagem dizendo quanto ele recebe
por hora, dividindo as horas trabalhadas pelo valor recebido.

SUGESTÃO:

let hrsPorDia = prompt("Quantas horas você trabalha por dia?")
let recebePorDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${hrsPorDia/recebePorDia} por hora`) */


//EXERCICIOS DE ESCRITA DE CÓDIGO
/*
EXERCICIO 1 (a,b,c,d)

let variNomeUsuario 
let variIdadeUsuario 

console.log(typeof(variNomeUsuario, variIdadeUsuario)) Foi imprimido undefined, pois as variáveis 
não possuem valores atribuídos.

EXERCICIO 1 (e)

let variNomeUsuario = prompt("Quantas anos você tem?")
let variIdadeUsuario = prompt("Qual sua idade?")


console.log(typeof(variNomeUsuario, variIdadeUsuario)) Foi imprimido agora o valor string para ambos números,
isso aconteceu pois o prompt acaba transformando todos os nossos valores em string, mesmo sendo eles booleans ou
númericos.

//EXERCICIO 1 (g)
/*
let variNomeUsuario = prompt("Qual seu nome?")
let variIdadeUsuario = prompt("Quantos a sua idade?")
console.log("Olá", variIdadeUsuario, "sua idade é:", variIdadeUsuario)

nesse exercicio eu percebi que o alert, acabou nao trazendo os valores guardados na variaveis, apenas o console
conseguiu concatenar as mensagens olá e sua idade é com as variaveis let */

// EXERCICIO 2 
/*
let perguntaUm = prompt("Hoje está chovendo?")
alert(perguntaUm)
let perguntaDois = prompt("Você está usando chinelo?")
alert(perguntaDois)
let perguntaTres = prompt("Você está se sentindo feliz?")
alert(perguntaTres)

TESTADO E APROVADO ! */

//EXERCICIO 3
/*
let a = 10
let b = 25
let c 
c = a
a = b
b = c

console.log("O novo valor de a é:", a)
console.log("O novo valor de b é:", b) 

Nesse exercicio tive um pouco de dificuldade inclusive procurar em sites e acabei descobrindo a necessidade
de uma declaração de uma terceira váriavel para guardar o valor da primeira váriavel, que mais a seguir tem seu 
valor alterado pela segunda */

