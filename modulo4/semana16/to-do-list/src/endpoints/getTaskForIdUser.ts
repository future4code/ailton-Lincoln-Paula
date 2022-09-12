import {Request, Response} from 'express'
import getTaskForIdUserData from './../data/getTaskForIdUserData'
import { connection } from './../data/baseDataBase'

export default async function (req:Request, res:Response){

    try {
        
        const id = req.query.creatorUserId as string
        
        if(id.length === 0){
            res.statusCode = 400
            throw new Error(`Passe um id !`)
        }
        
        const [checksId] = await connection.raw(`
        SELECT * FROM TodoListTask WHERE id = "${id}";`)

        if (!checksId[0]) {
            res.statusCode = 400
            throw new Error("Task não encontrada !");
        }

        const result = await getTaskForIdUserData(id)

        const resultMap = await result.map((task:any)=>{

            const data = new Date(task.limit_date)
            const day = (data.getDate())
            const month = (data.getMonth() + 1)
            const year = (data.getFullYear())
            const dataTask = `${day}-${month}-${year}`


            return {taskId: task.id,
            title: task.title,
            description: task.description,
            limitDate: dataTask,
            creatorUserId: task.creator_user_id,
            status: task.status,
            creatorUserNickname: task.nickname }
        })

        res.status(200).send({tasks: resultMap})

    } catch (error:any) {
        
        res.status(res.statusCode || 500).send(error.message)

    }



}