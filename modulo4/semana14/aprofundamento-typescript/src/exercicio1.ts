// a) Crie uma variável minhaString do tipo string e 
// atribua um valor a ela. Tente atribuir um número a 
// esta variável. O que acontece?


// let minhaString:string = "Valor Simbolico"
// minhaString = 5

// Acontece um erro devido a tipagem string atribuida a váriavel minhas string quando se tenta 
// modificar o valor dela para um valor que não seja uma string



// ======================================================================================================

// b) Crie uma variável meuNumero do tipo number e atribua um valor numérico.
//  Como fazer para que essa variável também aceite strings? Ou seja, como criamos no 
//  typescript uma variável que aceite mais de um tipo de valor?

// let meuNumero:number|string = 5

// meuNumero = "oi"

// adicionando o operador ou | fazendo a mesma aceitar um valor ou o outro


// ======================================================================================================

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

// `nome`, que é uma string;

// `idade`, que é um número;

// `corFavorita`, que é uma string.

// Crie mais três objetos, que também precisam ter apenas os campos definidos acima.
//  Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.

// type pessoa = {
//     nome:string,
//     idade:number,
//     corFavorita:string
// }

// let person:pessoa = {
// nome: "lincoln",
// idade: 22,
// corFavorita: "Vermelho"

// }

// let person1:pessoa = {
// nome: "lucas",
// idade: 19,
// corFavorita: "Azul"
// }

// let person2:pessoa = {
// nome: "luiza",
// idade: 25,
// corFavorita: "Preto"
// }


// ======================================================================================================

// d) Modifique a propriedade `corFavorita` para que apenas seja possível 
// escolher entre as cores do arco-íris. Utilize um `enum` para isso.

// enum ArcoIrisColors{
// VERMELHA = "vermelha",
// LARANJA = "laranja",
// AMARELA = "amarela",
// VERDE = "verde",
// AZUL = "azul",
// AZULESCURO = "azul-escuro",
// VIOLETA = "violeta"
// }

// type pessoa = {
//     nome:string,
//     idade:number,
//     corArcoIrisFavorita:ArcoIrisColors
// }

// let person:pessoa = {
// nome: "lincoln",
// idade: 22,
// corArcoIrisFavorita: ArcoIrisColors.VERDE

// }

// console.table(person)