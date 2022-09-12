import { Request, Response } from "express"
import selectTypeUser from '../../data/exercicio1/selectTypeUser'

export const getUserType = async(req: Request,res: Response): Promise<void> =>{
   try {
         const type = req.params.type as string

         const user = await selectTypeUser(type)

         res.status(200).send(user)

   } catch (error: any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}