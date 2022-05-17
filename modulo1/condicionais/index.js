//EXERCÍCIOS INTERPRETAÇÃO DE CÓDIGO
//EXERCICIO 1 

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

/*
A)) ESSE CÓDIGO, VERIFICA SE O NÚMERO INSERIDO NO PROMPT É UM NÚMERO PAR, SE SIM É IMPRIMIDO 
 QUE PASSOU NO TESTE, SENÃO, NÃO PASSOU NO TESTE, ENTÃO É UM NÚMERO IMPAR.
B)) NÚMEROS PARES
C)) NÚMEROS NÃO PARES, OU SEJA, IMPARES. */



//EXERCICIO 2

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.   
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

/* A)) O CÓDIGO PEDE AO USUÁRIO QUE INSIRA UMA FRUTA NO PROMPT, A CONDICIONAL LÊ A FRUTA INSERIDA E CASO
SEJAM IGUAIS, O PREÇO É INSERIDO NA VÁRIAVEL LET PREÇO E IMPRIMIDA O NOME DA FRUTA COM SEU PREÇO NO CONSOLE.
B))SERÁ IMPRIMIDO R$ 2.25
C)) CASO NÃO PARÁMOSSEMOS O PROGRAMA COM O BREAK, O PROGRAMA IRIA LER TODAS AS LINHAS RESTANTES DO
NOSSO CÓDIGO, INCLISE O DEFAULT QUE ATRIBUI UM VALOR NÚMERICO 5 A NOSSA VARIAVEL PREÇO, ENTÃO O VALOR DA
PÊRA NÃO SERIA MAIS 5.5, E SIM 5.  */



//EXERCICIO 3

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

/* A)) A PRIMEIRA LINHA, ESTÁ RECEBENDO UM PROMPT E O TRANSFORMANDO EM UM VALOR NÚMERO
B))SE FOSSE NÚMERO 10: "Esse número passou no teste" (POIS 10 É MAIOR QUE 0)
SE FOSSE -10: DARIA ERRO NO CONSOLE, POIS O CONSOLE.LOG(MENSAGEM), ESTÁ TENTANDO ACESSAR ALGO QUE NÃO
ESTA VISIVEL PRA ELA, OU SEJA, UMA VARIVEL DENTRO DA UMA CONDICIONAL. 
C))HAVERÁ ERRO, POIS O IF, JÁ É UM "SUB-ESCOPO", SUB-ESCOPOS PODEM ACESSAR INFORMAÇÕES DO ESCOPO PRINCIPAL,
APESAR DISSO O ESCOPO PRINCIPAL, NÃO PODE ACESSAR UMA INFORMAÇÃO DENTRO DE UM SUB-ESCOPO, TEMOS
QUE DAR O CONSOLE.LOG DIRETAMENTE DENTRO DA NOSSA CONDICIONAL. */



//EXERCÍCIOS DE ESCRITA DE CÓDIGO
//EXERCICIO 1 
// 1.A.B.C

// let idadeUsuario = Number(prompt(`Qual sua idade?`))
// if(idadeUsuario >= 18){
//     console.log("Você já pode dirigir!")
// }else{
//     console.log("Você não pode dirigir")
// }


//EXERCICIO 2


// const turnoEstudante = (prompt(`DIGITE A INICIAL DO SEU TURNO DE ESTUDO:
// M-Matutino
// V- Vespertino
// N-Noturno`))

// if(turnoEstudante === "M"){

//     console.log("Bom Diaaaa!")

// }else if(turnoEstudante === "V"){

//     console.log("Boa tardeeee!")

// }else if(turnoEstudante === "N"){

//     console.log("Boa noiteee!")
// }else{

//     console.log("Tu não estuda !")
// }



//EXERCICIO 3

// const turnoEstudante = (prompt(`DIGITE A INICIAL DO SEU TURNO DE ESTUDO:
// M-Matutino
// V- Vespertino
// N-Noturno`))
// let respostaUsuario

// switch (turnoEstudante){
//     case "M":
//     respostaUsuario = "Bom Diaaaa!"
//     break;
//     case "V":
//         respostaUsuario = "Boa Tardeeee!"
//         break;
//         case "N":
//             respostaUsuario = "Boa Noiteee!"
//             break;
// }
// console.log(`${respostaUsuario}`)


//EXERCICIO 4

// let perguntaGenero = prompt("Qual gênero de filme vamos assistir?") 
// let perguntaPrice = Number(prompt("Qual preço do ingresso?"))
// let perguntaMinusc = perguntaGenero.toLowerCase()

// if(perguntaMinusc === "fantasia" && perguntaPrice <= 15){
//         console.log("Bom filme!")

// }else{
//         console.log("Escolha outro filme :(!")
// }


//DESAFIOS
//1.

// let perguntaGenero = prompt("Qual gênero de filme vamos assistir?") 
// let perguntaPrice = Number(prompt("Qual preço do ingresso?"))
// let perguntaMinusc = perguntaGenero.toLowerCase()

// if(perguntaMinusc === "fantasia" && perguntaPrice <= 15){
//     let pergunta = prompt(`Qual lanchinho você quer escolher? doce, chocolate, refrigerante`)
//     console.log(`Bom filme! e Aproveite o seu ${pergunta}`)

// }else{
//     console.log("Escolha outro filme :(!")
// }



//2.

// - Nome completo;
// - Tipo de jogo: IN indica internacional; e DO indica doméstico;
// - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
// - Categoria: pode ser as opções 1, 2, 3 ou 4;
// - Quantidade de ingressos

// let informacao1 = prompt("Qual seu nome completo?")

// let informacao2 = prompt(`Qual tipo de jogo?
// IN - internacional
// DO - indica doméstico`)

// let informacao3 = prompt(`Qual etapa do jogo?
// SF - Semi-final
// DT - Decisão terceiro lugar
// FI - Final`)

// let informacao4 = Number(prompt(`Qual categoria?
// 1.
// 2.
// 3.
// 4.`
// ))

// let informação5 = Number(prompt(`Qual quantidade de ingressos?`))


// if(informacao2 === "DO" && informacao3 === "SF" && informacao4 ===1){
//     let continhaBasica = (informação5*1320)
//     console.log(`Seu nome é: ${informacao1}
// O tipo de jogo é: ${informacao2}
// A etapa do jogo é: ${informacao3}
// A categoria do jogo é: ${informacao4}
// A quantidade de ingressos é: ${informação5}
// O preço dos ingressos são: ${continhaBasica}`)


// }else if(informacao2 === "DO" && informacao3 === "SF" && informacao4 ===2){
//     let continhaBasica1 = (informação5*880)
//     console.log(`Seu nome é: ${informacao1}
//     O tipo de jogo é: ${informacao2}
//     A etapa do jogo é: ${informacao3}
//     A categoria do jogo é: ${informacao4}
//     A quantidade de ingressos é: ${informação5}
//     O preço dos ingressos são: ${continhaBasica1}`)


// }else if(informacao2 === "DO" && informacao3 === "SF" && informacao4 ===3){
//     let continhaBasica3 = (informação5*550)
//     console.log(`Seu nome é: ${informacao1}
//     O tipo de jogo é: ${informacao2}
//     A etapa do jogo é: ${informacao3}
//     A categoria do jogo é: ${informacao4}
//     A quantidade de ingressos é: ${informação5}
//     O preço dos ingressos são: ${continhaBasica3}`)


// }else if(informacao2 === "DO" && informacao3 === "SF" && informacao4 ===4){
//     let continhaBasica4 = (informação5*220)
//     console.log(`Seu nome é: ${informacao1}
//     O tipo de jogo é: ${informacao2}
//     A etapa do jogo é: ${informacao3}
//     A categoria do jogo é: ${informacao4}
//     A quantidade de ingressos é: ${informação5}
//     O preço dos ingressos são: ${continhaBasica4}`)}
    