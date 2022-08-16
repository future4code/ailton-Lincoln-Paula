// a) Crie um arquivo chamado `exercicio-4.ts` , cole o código abaixo e use 
// comentários para responder as questões.


//   OK



// ======================================================================================================
// b) Como você faria, já com a extensão instalada,
//  para transpilar(converter) esse arquivo typescript 
//  em um arquivo javascript?


// Eu apena adicionaria o script no package.json e rodaria o comando de start, ou poderia 
// rodar o comando de forma direta tsc && node ./build/exercicio4.js,
// node transpile pra mim o arquivo ts e rode a build no exercicio 4



type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

console.log(pokemon1)


// ======================================================================================================
// c) E se este arquivo estivesse dentro de uma pasta chamada src
// O processo seria diferente? Se sim, descreva as diferenças.

// não mudaria nada, pois o comando tsc, encontra todos os arquivos de tipo tipescript e transpila
// todos, sendo necessario apenas mudar o caminho de saida da build



// ======================================================================================================
// d) Existe alguma maneira de **transpilar** múltilplos arquivos
//  de uma vez só? Caso conheça, explique como fazer.


// teria como rodando o comando de start de cada seguido do operador &&, 
// rodando duas build uma após a outra,
// ex: npm run exercicio1 && npm run exercicio2
// ou,
// poderiamos criar um script sem caminho setado rodando assim todos 
// os arquivos de extensão .ts