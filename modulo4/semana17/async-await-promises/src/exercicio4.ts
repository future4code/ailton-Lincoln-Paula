import axios from 'axios'
import {BASE_URL} from './constants/url'
import {Notice} from './types/types'

// Vamos continuar as nossas funcionalidades da API. Crie 
// uma função que permita criar uma nova notícia.

// *a.* Qual é o tipo dessa função? Por quê?


// b. Implemente a função solicitada

const body:Notice = {
    title: "Meu cachorro é lindo",
    content: "Pena para os desavisados que odeiam cachorros, o meu é lindo !",
    date: Date.now()
}

async function putNotice (notc:Notice) :Promise<any> {


  return  await axios.put(`${BASE_URL}/news`,notc)
    .then((res)=>console.log(res))


}
    putNotice(body)

