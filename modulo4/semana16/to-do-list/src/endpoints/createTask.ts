import {Request, Response} from 'express'
import createTaskData from '../data/createTaskData'
import getLengthTaskData from './../data/getLengthTaskData'

export default async function createTask(req:Request, res:Response){
    try {
        const {title,description,limitDate,creatorUserId} = req.body

        if(!title || !description || !limitDate || !creatorUserId ){
            res.statusCode = 400
            throw new Error(`Você não pode mandar dados vazios !`)
        }
        
       const id = await getLengthTaskData()
       const date = limitDate.split('/')
        const dateSQL = `${date[2]}-${date[1]}-${date[0]}`

      await createTaskData(String(id),title,description,dateSQL,creatorUserId)
        
        res.status(201).send(`Tarefa ${title}, criada com sucesso !`)

    } catch (error: any) {
        res.status(res.statusCode || 500).send({message: error.message})
    }
}