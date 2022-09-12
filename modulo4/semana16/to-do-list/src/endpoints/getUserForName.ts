import {Request, Response} from 'express'
import getUserForNameData from './../data/getUserForNameData'
import { connection } from './../data/baseDataBase'

export default async function (req:Request, res:Response){

    try {
        
        const name = req.query.name as string
        
        if(name.length === 0){
            res.statusCode = 400
            throw new Error(`Passe um nome !`)
        }

        const result = await getUserForNameData(name)

        if(result.length === 0){
            res.statusCode = 200
            throw new Error(`Usuário não encontrado`)
        }

        const resultMap = await result.map((users:any) =>{

            return {id: users.id,
                    nickname: users.nickname}

        })
       
        res.status(200).send({users: resultMap})

    } catch (error:any) {
        
        res.status(res.statusCode || 500).send(error.message)

    }



}