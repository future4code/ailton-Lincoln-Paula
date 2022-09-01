import getAllUsersData from './../data/getAllUsersData'
import {Request, Response} from 'express'

export async function getAllUsers(req:Request, res:Response):Promise<void>{

    try {   

      const users =  await getAllUsersData()
    
      res.status(200).send({message: 'Aqui estão todos usuários', data:users})
        
    } catch (error:any) {
        
        res.status(res.statusCode || 500).send({message:error.message})

    }


}