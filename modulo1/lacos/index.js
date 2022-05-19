//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
//EXERCÍCIO 1       

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i //ATRIBUI E SOMA
// }
// console.log(valor)

/* A lógica do nosso programa começa com duas váriaveis tendo seu valor inicial igual a 0, a variavel valor,
e a variavel i, a nossa estrutura de repetição for, repetirá, ate que nossa variavel i, seja maior ou igual a 5,
ou seja, essa estrutura de repetição irá durar por 4 repetições, a cada repetição, temos o incremento da variavel
i, juntamente da atribuição do novo valor na variavel valor, baseado no indice daquele momento.
1. repetição: 0<5 (true), então, valor= 0, incrementa 1 (indice: 0)
2. repetição 1<5 (true), então, valor = 0+1, incrementa 1 (indice: 1)
3. repetição 2<5 (true), então, valor = 1+2, incrementa 1 (indice: 2)
4. repetição 3<5 (true), então, valor = 3+3, incrementa 1 (indice: 3)
5. repetição 4<5 (true), então, valor = 6+4, incrementa 1 (indice: 4)
6. repetição 5<5 (false), termina programa. (indice: 5) 
ÚLTIMO VALOR: 10*/


//EXERCÍCIO 2

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

//A))
/* Nossa estrura repetirá até a condição imposta no if, ou seja, a estrutura repetirá, todos os números
contidos na array lista, que sejam maior que o número 18
obs: os números da array lista, estão sendo guardados na variavel numero. */


//B)) /\/\/\/\/\/\/\-
/* Eu não sei se poderiamos, acessar um item por vez no metódo for of, pois ja é uma estrutura que ja percorre
todas as posições do array. Porém existe algumas maneiras de acessar todos esses elementos do array, 
uma delas seria retirando nossa condicional if, e imprimindo no console o indice passado pela 
aquela repetição. */ 

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
// 		console.log(numero)
// }

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }
/* Se o usuário digitasse 4, a variavel quantidadeAtual, no final do código, seria acrescentada 4 vezes,
com o quantidadeAtual ++

1 repetição: 0<4 (true), então, entramos no for, se 0<1 (true), então, linha = (*)
2 repetição: 1<4 (true), então, entramos no for, se 0<2 (true), então, linha  (*)+(*)
3 repetição: 2<4 (true), então, entramos no for, se 0<3 (true), então, linha = (*)+(*)+(*)
4 repetição: 3<4 (true), então, entramos no for, se 0<4 (true), então, linha = (*)+(*)+(*)+(*)
5 repetição: 4<4 (false), então não entramos no for */

//Obs: temos um while que verifica se iremos ou não entrar no for !!


//EXERCÍCIOS DE ESCRITA DE CÓDIGO
//EXERCÍCIO 1       
//A, B e C))

// let perguntaUsuario = Number(prompt("Quantos bichinhos de estimação você tem ?"))
// let memoriaBichinhos = []

// if(perguntaUsuario === 0){
//     console.log("Que pena ! Você pode adotar um pet!")
// }else if(perguntaUsuario > 0){
//     for(i = 0; i < perguntaUsuario; i++){
//     let maisBichinhos = prompt("Qual nome dos bichinhos ?")
//         memoriaBichinhos.push(maisBichinhos)
//     }
//     console.log(memoriaBichinhos)
// }



//EXERCÍCIO 2
//A)) IMPRIMI CADA ELEMENTO POR VEZ

// let arrayOriginal = [1, 2, 3, 4, 5 ,6 ,7]
// let apenasGuardando = []
// function primeiraFuncao(arr){
//     for(i = 0; i < arr.length; i++){
//         apenasGuardando = arr[i]
//         console.log(apenasGuardando)
//     }
// }
// primeiraFuncao(arrayOriginal)


//B)) TODOS ITENS, DIVIDIDOS POR 10

// let arrayOriginal = [1, 2, 3, 4, 5 ,6 ,7]
// let apenasGuardando = []
// function segundaFuncao(arr){
//     for(i = 0; i < arr.length; i++){
//         apenasGuardando = arr[i]
//         console.log((apenasGuardando)/10)
//     }
// }
// segundaFuncao(arrayOriginal)


//C)) ESSA FOI SOFRIDAAAA !

// let arrayOriginal = [1, 2, 3, 4, 5 ,6 ,7]
// let guardandoNumeros = []

// function retornaParidade(arr){
//     for(i = 0; i < arr.length; i++){
//     let verificaParidade = arr[i] % 2
//         if(verificaParidade === 0){
//          guardandoNumeros.push(arr[i])
//         }

//      }

// console.log(guardandoNumeros)
// }

// retornaParidade(arrayOriginal)


//D))

// let arrayComStrings = ["Oi", "Tudo", "Bem", "Com", "Voce?", "Que", "Bom"]
// let strings = []
// let indexAtual

// function retornaElemento(arr){
//  for(i = 0; i < arr.length; i++){
//  indexAtual = arr[i]
//  console.log(`O elemento do índex ${i} é: ${indexAtual}`)
//  } 
// }
// retornaElemento(arrayComStrings)



//E)) NAO CONSEGUI RETORNAR O MENOR NÚMERO !!

// let guardaMaiorNumero = 0
// let guardaMenorNumero = 31
// const arrayOriginal = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]

// function maiorMenorNumero(arr){
//   for(let i = 0; i < arr.length; i++) {
//     const elemento = arr[i]

//     if(elemento > guardaMaiorNumero) {
//      guardaMaiorNumero = elemento //Até aqui ta certo
//     }else if(elemento < guardaMenorNumero){
//       guardaMenorNumero = elemento
//     }
//   }

//   console.log(`O maior número é: ${guardaMaiorNumero}, o menor número é ${guardaMenorNumero}`)
// }
//   maiorMenorNumero(arrayOriginal)

