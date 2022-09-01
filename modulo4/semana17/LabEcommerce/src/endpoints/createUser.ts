import { Request, Response } from "express"
import { User } from "../types/typeUser"
import insertUser from './../data/insertUser'

export async function createUser(req: Request,res: Response): Promise<void> {
   try {
      // confeccionar IDz
      const user = req.body
     
      if(!user.name || !user.email || !user.password){
         res.statusCode = 400
         throw new Error(`Dados indefinidos, verifique seus dados novamente !`)
      }

      if(typeof user.name != "string" || typeof user.email != "string" || typeof user.password != "string"){
         res.statusCode = 400
         throw new Error(`Todos os dados devem ser do tipo string !`)
      }

      if(user.password.length < 8){
         res.statusCode = 400
         throw new Error(`A senha deve conter pelo menos 8 digitos !`)
      }

      const newUser:User = {
         id: String(Math.floor(Math.random() * 100)),
         name: user.name,
         email: user.email,
         password: user.password
      }

       await insertUser(newUser)
       
      res.status(201).send(`Usuário ${newUser.name} adicionado a tabela ! `)

   } catch (error:any) {
      res.status(res.statusCode || 500).send({message:error.message})
   }
}
