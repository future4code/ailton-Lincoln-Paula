// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort(function(a,b){
      return a-b
  })
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const par = array => array % 2 === 0
  return array.filter(par)

}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
        let arrayVazia = []
        for (item of array){
          if (item % 2 === 0){
            arrayVazia.push(Math.pow(item,2));}
        }
            return arrayVazia

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    return array.reduce(function(a,b){
        return Math.max(a, b)
    })}
  


// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

let maiorNumero = num1
let maiorDivisivelPorMenor = true
let diferenca = Math.abs(num1-num2) //Retorna número absoluto

if (num2>num1){
    maiorNumero = num2;
    maiorDivisivelPorMenor = (maiorNumero % num1 === 0);
} else {
    maiorDivisivelPorMenor = (maiorNumero % num2 === 0);
}

return {
maiorNumero: maiorNumero,
maiorDivisivelPorMenor: maiorDivisivelPorMenor,
diferenca: diferenca}
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
let arrayVazia = []
for (let i = 0; arrayVazia.length < n; i ++){
    if(i % 2 === 0){
        arrayVazia.push(i)
    }
} return arrayVazia
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
let verificaTriangulo 
if(ladoA === ladoB && ladoB === ladoC){
verificaTriangulo = "Equilátero"
}else if(ladoA === ladoB || ladoB === ladoC || ladoA === ladoC){
verificaTriangulo = "Isósceles"
}else{
verificaTriangulo = "Escaleno"
}return verificaTriangulo
}

// EXERCÍCIO 10 //Só deu com arrow function !!
function retornaSegundoMaiorESegundoMenor(array) {
    let arrayVazia =[]
    array.sort((a,b) => a-b)
    arrayVazia.push(array[array.length-2], array[1]);
    return arrayVazia   
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  let obj = {nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']}
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

let newObj = {
    ...pessoa,
    nome: "ANÔNIMO"
}
return newObj
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}