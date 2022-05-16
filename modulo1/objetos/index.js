// INTERPRETAÇÃO DE CÓDIGO
// EXERCICIO 1

// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

/* 1º - No primeiro console, buscará e imprimirá primeiramente dentro do objeto filme, 
na array elenco na posição 0 a string "Matheus Nachtergaele".
2º - No segundo console, também irá fazer o mesmo caminho, mas dessa vez buscando a ultima posição (quando temos a 
propriedade length -1, acessamos todo o tamanho da array -1 posição, resultando em sua ultima posição.), 
imprimindo assim "Virginia Cavendish"
3º No terceiro console, buscará dentro do objeto filme, a array transmissoesHoje, a posição 2, ou seja
imprimirá objeto, Canal: Globo, Horario: 14H */



// EXERCICIO 2

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// A)
/* 1º No primeiro console, imprimirá todas as informações do objeto cachorro, nome, idade e raca.
2º No segundo console, irá imprimir as mesmas informações de idade e raca do objeto cachorro, 
tendo uma novo sobreposição no objeto nome, agora se chamando juba, ao inves de juca.
3º No terceiro console, teremos as mesmas informações de idade e raca do objeto gato, porém agora
substituindo na proriedade nome, o caracter a pelo o, ficando assim nome = jubo

B)
Os 3 pontos, servem de espelhamento, ou seja, chamaremos o nosso objeto cachorro, e vamos o espelhar
dentro de um novo objeto, podendo adicionar novos objetos, ou sobreescrevendo os antigos. */



// EXERCICIO 3 - RETORNA PROPRIEDADE DO OBJETO PESSOAS
// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }


// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

// A) PARAMETROS: OBJETO = CONST PESSOA, PROPRIEDADE = BACKENDER, ALTURA
/* 1ª No primeiro console, imprimirá false, referente a propriedade backender dentro
do objeto pessoa, que é um valor booleano "False"
2ª No segundo console, buscará dentro do objeto pessoa, a propriedade altura, mas como ela não foi 
definida, retornará um valor indefinido */

//B) 
/*Imprimiu o valor false pra backender, por que a propriedade backender está atribuida como false
no nosso objeto pessoa, e imprimiu indefinido na propriedade altura, porque essa propriedade não foi 
declara no nosso objeto. 
OBS: EXERCICIO, ONDE O PARAMETRO OBJETO É O OBJETO PESSOA, E A PROPRIEDAE É A "BECKENDER", "ALTURA",
RETORNANDO O VALOR TRUE OU FALSE, CASO DEFINIDOS CASO TENHAM SIDO DECLARADOS AS PROPRIEDADE. */



// ESCRITA DE CÓDIGO
// EXERCICIO 1
// A))
// const nomeEapelido = {
//     nome: "Lincoln Ribeiro",
//     apelidos: ["Lin", "Linkin", "Lili"]

// }

//
// function imprimi(obj){
//     const novoOBJETO = {
//         ...obj,
//     }
// console.log(`Eu sou ${novoOBJETO.nome}, mas pode me chamar de ${novoOBJETO.apelidos}`)
// }

// imprimi(nomeEapelido)

// B))
// const novosApelidos = {
//     ...nomeEapelido,
//     apelidos: [`Ze, Con, Nin`]
// }

// imprimi(novosApelidos)


// EXERCICIO 2
// A)) , B))

// const dadosPessoas1 = {
//     nome: "Lincoln Ribeiro",
//     idade: 21,
//     profissao: "Programador"

// }
// const novaPessoa = {
//     ...dadosPessoas1,
//     nome: "Joaozinho Terra",
//     idade: 25,
//     profissao: "pedreiro"
// }

// function imprimiDados(obj){
//     novoObj = {
//         ...obj
//     }
//     return[novoObj.nome, novoObj.nome.length, novoObj.idade, novoObj.profissao, novoObj.profissao.length]
// }
// console.log(imprimiDados(novaPessoa))


// EXERCICIO 3

// const carrinho = []

// const frutas_sacolao = {
//     nome: "mamao",
//     propriedade: true
// }

// const frutas_sacolao2 = {
//     ...frutas_sacolao,
//     nome: "ameixa" 
    
// }
// const frutas_sacolao3 = {
//     ...frutas_sacolao,
//     nome: "manga"
// }
// function movePraArray(obj){
//    const novoObj = {
//         ...obj
//     }
//     carrinho.push(obj)
// }
// movePraArray(frutas_sacolao)
// movePraArray(frutas_sacolao2)
// movePraArray(frutas_sacolao3)
// console.log(carrinho)