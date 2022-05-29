/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


//MANEIRA QUE EU CONSEGUI:

// function cartinhas(carta1User, carta2User, carta1Pc, carta2Pc){
//    console.log(`Usuário - cartas: ${carta1User.texto} ${carta2User.texto}`)
//    console.log(`Computador - cartas: ${carta1Pc.texto} ${carta2Pc.texto}`)
//    let somauser = carta1User.valor + carta2User.valor
//    let somapc = carta1Pc.valor + carta2Pc.valor
    
//    if(somapc>somauser){
//       console.log("O computador ganhou")
//    }else if(somauser>somapc){
//       console.log("O usuário ganhou")
//    }
//    else{
//       console.log("Empate !")
//    }
   
   
//    }
//    cartinhas(comprarCarta(), comprarCarta(), comprarCarta(), comprarCarta())




// OUTRO MANEIRO QUE EU CONSEGUI, APÓS A PRIMEIRA TENTATIVA

    const carta1Usuario = comprarCarta()
    const carta2Usuario = comprarCarta()
    const carta1Computador = comprarCarta()
    const carta2Computador = comprarCarta()
    const somandoCartaUsuario = carta1Usuario.valor + carta2Usuario.valor
    const somandoCartaComputador = carta1Computador.valor + carta2Computador.valor


if(confirm("Quer iniciar uma nova rodada?")){
   console.log("Boas vindas ao jogo de Blackjack!")
   console.log(`Usuário - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto}`)
   console.log(`Computador - cartas: ${carta1Computador.texto} ${carta2Computador.texto}`)
    if(somandoCartaComputador>somandoCartaUsuario){
      console.log("Computador Ganhou!")
   }else if(somandoCartaUsuario>somandoCartaComputador){
      console.log("Usuário Ganhou !")
   }else{
      console.log("Empate!")
   }}
    
   

