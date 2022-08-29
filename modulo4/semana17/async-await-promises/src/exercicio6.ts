import axios from 'axios'
import {BASE_URL} from './constants/url'
import {User} from './types/types'

// Vamos reescrever a função anterior utilizando o `Promise.all`. Antes disso, responda
//  as perguntas abaixo:

// a. O que o `Promise.all` faz?

// Ele espera toda a promise chegar, ou seja, toda a requisição acontecer, para continuidade
// de algo.


// b. Quais as vantagens de se utilizar o `Promise.all` no caso de se enviar as 
// notificações para todos os usuários?

// Enviar para todos os usuários ao mesmo tempo.


// c. Reimplemente a função utilizando `Promise.all`



const getAllSubscribers = async () => {
    const response = await axios.get(`${BASE_URL}/subscribers`)
    return response.data
}

const getSubscribersIds = (subscribers: any) => {
    return subscribers.map((subscriber: any) => {
        return subscriber.id
    })
}

const Notification = async (ids: string[]) => {

        try {

            const requests = ids.map(id =>
                axios.post(`${BASE_URL}/notifications`,{
                    subscriberId: id,
                    message: "Hoje faz 16°C"
                }))

            await Promise.all(requests)
            console.log(`Notificações enviadas !`)
        } catch (erro) {
            console.log(`Erro ao enviar notificar !`)
        }
    
}


const main = async () => {
    try {
        const subscribers = await getAllSubscribers()
        const subscribersIds = getSubscribersIds(subscribers)
        await Notification(subscribersIds)
    } catch (error: any) {
        const resp = error.response?.data || error.message
        console.log(resp)
    }
}

main()
