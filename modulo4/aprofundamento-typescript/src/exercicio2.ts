// function obterEstatisticas(numeros) {

//     const numerosOrdenados = numeros.sort(
//         (a, b) => a - b
//     )

//     let soma = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

// ======================================================================================================
// a) Quais são as entradas e saídas dessa função? 
// Copie a função para um arquivo .ts e faça a tipagem 
// desses parâmetros


// Entradas: array de numeros
// Saida: objeto de numeros


// type estatisticas = {
// maior:number,
// menor:number,
// media:number 
// }

// function obterEstatisticas(numeros:number[]):estatisticas {
//     const numerosOrdenados = numeros.sort(
//         (a, b) => a - b)

//     let soma = 0

//     for (let num of numeros) {
//         soma += num
//     }
//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

// console.log(obterEstatisticas([1,2,3,4,5]))

// ======================================================================================================
// b) Quais outras variáveis compõem essa função? Explicite a 
// tipagem de todas elas 

// as variaveis auxiliares são do tipo array de numeros e type numero
//     let numeros = [1,5,2,3,1,9,10]

//     const numerosOrdenados:number[] = numeros.sort(
        
//         (a, b) => a - b)

//     let soma:number = 0

//     console.log(numerosOrdenados)





// ======================================================================================================
// c) Crie um type chamado amostra de dados, isto é, 
// um objeto com as propriedades numeros e obterEstatisticas. Abaixo, 
// temos um exemplo de objeto desse tipo, declarado em JavaScript:

// const amostraDeIdades = {

//     numeros: [21, 18, 65, 44, 15, 18],

//     obterEstatisticas: (numeros) => {...}
// }


// type Amostra = {
//     numeros:number[],
//     obterEstatisticas: {maior: number, menor:number, media:number}
// }


