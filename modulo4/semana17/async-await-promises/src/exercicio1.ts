import axios from 'axios'
import {BASE_URL} from './constants/url'

// Vamos começar fazendo uma função nomeada simples que retorne
//  todos os assinantes da nossa aplicação. Ela deve ser assíncrona, 
//  porque utiliza o async para fazer a comunicação com o banco de dados. Além disso, 
//  por ora, indique que ela vai retornar um array de "qualquer coisa".



//a. Qual endpoint você deve utilizar para isso?

// O endpoint a ser utilizado deve ser o de get.

//b. Como indicamos o tipo de uma função assíncrona que retorna um "array de qualquer coisa"?

// nomeando antes da função sua assiscronidade, assim podendo fazer o código esperar o retorno 
// da nossa função, e dizendo que o retorno da função será uma promisa do tipo array.

//c. Implemente uma função nomeada que faça o que foi pedido.

async function getSubs():Promise<any[]>  {

     const result =  await axios.get(`${BASE_URL}/subscribers`)
     return result.data  

}

getSubs()

