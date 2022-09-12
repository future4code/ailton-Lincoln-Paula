import axios from 'axios'
import {BASE_URL} from './constants/url'
import {User} from './types/types'

// Agora, implemente uma função que receba um array de usuários e 
// uma mensagem e envie essa mensagem
//  como notificação para todos os usuários. 
// A princípio, não utilize o Promise.all



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

      for (const id of ids) {
        try {
            await axios.post(`${BASE_URL}/notifications`, {
                subscriberId: id,
                message: "Hoje faz 16°C"
            })
            console.log(`Notificação enviada a ${id}`)
        } catch (erro) {
            console.log(`Erro ao enviar para ${id}`)
        }
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
