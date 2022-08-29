// Exercicio 1 - REFATORAÇÃO

// function checaTriangulo(a, b, c) {
//     if (a !== b && b !== c) {
//       return "Escaleno";
//     } else if (a === b && b === c) {
//       return "Equilátero";
//     } else {
//       return "Isósceles";
//     }
//   }

// RESPOSTA: 

// function checaTriangulo(a:number, b:number, c:number):string {
//     if (a !== b && b !== c) {
//       return "Escaleno";
//     } else if (a === b && b === c) {
//       return "Equilátero";
//     } else {
//       return "Isósceles";
//     }
//   }

// console.log(checaTriangulo(2,2,2))




// Exercicio-2 - REFATORAÇÃO

// function imprimeTresCoresFavoritas() {
//     const cor1 = prompt("Insira sua primeira cor favorita")
//     const cor2 = prompt("Insira sua segunda cor favorita")
//     const cor3 = prompt("Insira sua terceira cor favorita")
//     console.log([cor1, cor2, cor3])
//  }


// RESPOSTAS:

// function imprimeTresCoresFavoritas():void {
//     const cor1:string = prompt("Insira sua primeira cor favorita")
//     const cor2:string = prompt("Insira sua segunda cor favorita")
//     const cor3:string = prompt("Insira sua terceira cor favorita")
//     console.log([cor1, cor2, cor3])
//  }




// Exercicio-3 - REFATORAÇÃO

// function checaAnoBissexto(ano) {
//     const cond1 = ano % 400 === 0
//     const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
//     return cond1 || cond2
//  }

//RESPOSTA:

// function checaAnoBissexto(ano:number):boolean {
//     const cond1 = ano % 400 === 0
//     const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
//     return cond1 || cond2
//  }

//  console.log(checaAnoBissexto(2000))


//Exercicio-4 - REFATORAÇÃO

// function comparaDoisNumeros(num1, num2) {
//     let maiorNumero;
//     let menorNumero;
  
//     if (num1 > num2) {
//       maiorNumero = num1;
//       menorNumero = num2;
//     } else {
//       maiorNumero = num2;
//       menorNumero = num1;
//     }
  
//     const diferenca = maiorNumero - menorNumero;
  
//     return diferenca 
//   }

// RESPOSTA:

// function comparaDoisNumeros(num1:number, num2:number):number {
//     let maiorNumero;
//     let menorNumero;
  
//     if (num1 > num2) {
//       maiorNumero = num1;
//       menorNumero = num2;
//     } else {
//       maiorNumero = num2;
//       menorNumero = num1;
//     }
  
//     const diferenca = maiorNumero - menorNumero;
  
//     return diferenca 
//   }

//   console.log(comparaDoisNumeros(50,25))


// EXERCICIO 5 - REFATORAÇÃO

// function checaRenovacaoRG(anoAtual, anoNascimento, anoEmissao ) {
//     let idade = anoAtual - anoNascimento
//     let tempoCarteira = anoAtual - anoEmissao
   
//      if(idade <= 20 ) {
//          return tempoCarteira >= 5 ? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos"
       
//       }else if(idade >= 20 || idade <= 50) {
//          return tempoCarteira >= 10 ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos"
       
//       }else if(idade > 50) {
//          return tempoCarteira >=15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos"
       
//        }else {
//            return "error"
//        }
//    }


// RESPOSTA:

// function checaRenovacaoRG(anoAtual:number, anoNascimento:number, anoEmissao:number ):string {
//     let idade = anoAtual - anoNascimento
//     let tempoCarteira = anoAtual - anoEmissao
   
//      if(idade <= 20 ) {
//          return tempoCarteira >= 5 ? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos"
       
//       }else if(idade >= 20 || idade <= 50) {
//          return tempoCarteira >= 10 ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos"
       
//       }else if(idade > 50) {
//          return tempoCarteira >=15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos"
       
//        }else {
//            return "error"
//        }
//    }
   
//    console.log(checaRenovacaoRG(2022, 2000, 2015))



                                // DESAFIOS
// EXERCICIO-6

// function manipulaNumeros(num1:number, num2:number):string|number{
    
//     let maiorNumero 
//     if(num1>num2){
//         maiorNumero = num1
//     }else{
//         maiorNumero = num2
//     }


//     return (`A soma dos números é: ${(num1+num2)} 
//              A subtração dos números é: ${(num1-num2)}
//             A multiplicação dos números é: ${(num1*num2)}
//             O maior número é: ${maiorNumero}`)


// }
// console.log(manipulaNumeros(5,15))


// EXERCICIO-7

// function dnaToRna(dna:any){
//     // A=U
//     // T=A
//     // C=G
//     // G=C

//     let arr = dna.split('')
//     // console.log(arr)
//     let mapeia = arr.map((dnazin:string) => {
//       if(dnazin === "A"){
//        return dnazin = "U"
//       }else if(dnazin === "T"){
//         return dnazin = "A"
//       }else if(dnazin === "C"){
//         return dnazin = "G"
//       }
//       else if(dnazin === "G"){
//         return dnazin = "C"
//       }
//     })

//     return mapeia.toString().replaceAll(",", '')
//   }

// console.log(dnaToRna("ATTGCTGCGCATTAACGACGCGTA"))


// EXERCICIO-8

// function reverseString(string:string):string {

//     var stringReverse = ""

//     for (var i = string.length - 1; i >= 0; i--) {

//         stringReverse += string[i]

//     }
//     return stringReverse
//   }
//   console.log(reverseString('o gato roeu a roupa do rei'))



// EXERCICIO-9

// function ValidaLabenu(idade:number, ensino:boolean, horas:number, curso:string):boolean{

// if(curso === "integral"){

// if(idade > 18 && ensino && horas > 40){
//     return true
// }else{
//     return false
// }

// }else{
//     if(idade > 18 && ensino && horas > 20){
//         return true
//     }else{
//         return false
//     }

// }
// }

// console.log(ValidaLabenu(21, true, 45, "integral"))
// console.log(ValidaLabenu(21, true, 15, "norturno"))