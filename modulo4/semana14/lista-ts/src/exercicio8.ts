// Escreva uma função que pergunta ao usuário a data de nascimento de uma pessoa 
// (ex.: “24/04/1993”, e a data de emissão da sua carteira de identidade (ex.: “07/11/2015”).
//  A função deve retornar um booleano que indica se a carteira precisa ser renovada ou não. A 
//  carteira precisa ser renovada segundo os seguintes critérios:

// - Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos 
// (se for exatamente 5 anos, deve ser renovada).
// - Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos
//  (se for exatamente 10 anos, deve ser renovada).
// - Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos

function checaRenovacao(anoNascimento:string, anoEmissao:string):boolean {

  let convertNascimento =  anoNascimento.split('/')[2]
  let convertEmissao = anoEmissao.split('/')[2]


    let idade:number = 2022 - Number(convertNascimento)
    let tempoCarteira:number = 2022 - Number(convertEmissao)

    if(idade<=20 && tempoCarteira>=5 || (idade > 20 && idade <= 50) && tempoCarteira >= 10 || idade > 50 && tempoCarteira >= 15){
        return true
    } else {
        return false
    }
   }

console.log(checaRenovacao("30/07/2000", "18/09/2015"))