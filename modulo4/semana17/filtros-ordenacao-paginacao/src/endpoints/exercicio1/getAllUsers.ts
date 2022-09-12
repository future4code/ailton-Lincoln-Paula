import { Request, Response } from "express"
import selectAllUsers, {selectUser} from "../../data/exercicio1/selectAllUsers"

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
   try {

      const name = req.query.name as string

      if(name === ''){
         
         const users = await selectAllUsers()
         res.status(200).send(users)
      }else{

         const user = await selectUser(name)
         res.status(200).send(user)

      }

      
   } catch (error: any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}