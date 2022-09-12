import {Request, Response} from 'express'
import getUserIDData from '../data/getUserIDData'


export default async function getUserID(req:Request, res:Response){
    try {
        const id = req.params.id
      const user = await  getUserIDData(String(id))
        console.log(user)
        if(user === undefined){
            res.statusCode = 400
            throw new Error(`Id não encontrado no nosso banco de dados !`)
        }
        res.status(200).send({id: user.id, name: user.name})

    } catch (error: any) {
        res.status(res.statusCode || 500).send({message: error.message})
    }
}