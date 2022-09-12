import {Request, Response} from 'express'
import createUserData from '../data/createUserData'
import getLength from '../data/getLengthUsersData'

export default async function createUser(req:Request, res:Response){
    try {
        const {name,nickname,email} = req.body

        if(!name || !nickname || !email){
            res.statusCode = 400
            throw new Error(`Você não pode mandar dados vazios !`)
        }
        
        const id = await getLength()

        const user = await createUserData(String(id),name,nickname,email)

         res.status(201).send(`Usuário ${name} foi criado !`)

    } catch (error: any) {
        res.status(res.statusCode || 500).send({message: error.message})
    }
}