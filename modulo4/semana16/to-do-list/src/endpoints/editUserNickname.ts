import {Request, Response} from 'express'
import editUserNicknameData from '../data/editUserNicknameData'
import { connection } from './../data/baseDataBase'

export default async function (req:Request, res:Response){

    try {
        const {nickname} = req.body
        const id = req.params.id

        if(typeof nickname !== 'string'){
            res.statusCode = 400
            throw new Error("O nome deve ser um texto !");
        }

        if(!nickname){
            res.statusCode = 400
            throw new Error("Preencha o novo nome !");
        }

        const [checksId] = await connection.raw(`
        SELECT * FROM User_To_Do_List
        WHERE id = ${id}`)

        if (!checksId[0]) {
            res.statusCode = 400
            throw new Error("Usuário não encontrado !");
        }

        await  editUserNicknameData(String(id),nickname)
        res.status(200).send(`O nome foi editado com sucesso !`)
    } catch (error:any) {
        
        res.status(res.statusCode || 500).send(error.message)

    }



}