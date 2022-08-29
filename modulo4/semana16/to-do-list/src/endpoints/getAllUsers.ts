import {Request, Response} from 'express'
import getAllUsersData from '../data/getAllUsersData'
import { connection } from './../data/baseDataBase'

export default async function (req:Request, res:Response){

    try {
        
        const result = await getAllUsersData()

        const resultMap = await result.map((users:any)=>{
            return {id: users.id,
                    nickname: users.nickname }
        })

        res.status(200).send({users: resultMap})
    } catch (error:any) {
        
        res.status(res.statusCode || 500).send(error.message)

    }



}