// O desafio é: você deve criar uma *arrow function* assíncrona que imprima a mensagem
//  `"Oi"` no terminal depois de 5 segundo a partir do momento em que o script foi rodado. 

    
//     Pesquise pela função `setTimeout` do JS para implementar o "tempo de espera" de 5
//      segundos para imprimir a mensagem

const logOi = async()=>{

    
    return await console.log('oi')

    
}

setTimeout(logOi, 5000)

