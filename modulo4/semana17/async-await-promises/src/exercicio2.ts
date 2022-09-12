import axios from 'axios'
import {BASE_URL} from './constants/url'

// Agora, para treinar um pouco da sintaxe, reescreva a função do exercício 1 
// utilizando *arrow function*. 

// *a.* Explique, com suas palavras, a diferença da sintaxe de uma função nomeada a
// ssíncrona e uma arrow function assíncrona

// A diferença é uma criação de uma constante que será a nossa função, mudamos de function para
// const, utilizando a arrow function dizendo que a função irá ser de callback, ou seja,
// uma função que tem uma chamada de retorno, o restante será igual.

// b. Implemente a função solicitada, usando arrow function


const getSubs2 = async ():Promise<any[]> =>{

    const result =  await axios.get(`${BASE_URL}/subscribers`)
    return result.data  

}

getSubs2()