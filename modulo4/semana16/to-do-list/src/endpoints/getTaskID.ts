import {Request, Response} from 'express'
import getTaskIDData from '../data/getTaskIDData'


export default async function getUserID(req:Request, res:Response){
    try {

        const id = req.params.id

      const task = await  getTaskIDData(String(id))


        if(task === undefined){
            res.statusCode = 400
            throw new Error(`Id não encontrado no nosso banco de dados !`)
        }
        const data = new Date(task.limit_date)
        const day = (data.getDay())
        const month = (data.getMonth())
        const year = (data.getFullYear())
        const dataTask = `${day}-${month}-${year}`

        // res.status(200).send({
        //     taskId: task.id,
        //     title: task.title,
        //     description: task.description,
        //     // limitDate: "04/05/2020",
        //     status: task.status,
        //     creatorUserId: task.creator_user_id,
        //     // creatorUserNickname: "astrodev"
        // })

    } catch (error: any) {
        res.status(res.statusCode || 500).send({message: error.message})
    }
}