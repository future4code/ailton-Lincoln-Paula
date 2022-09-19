import { Request, Response } from "express"
import { UserBusiness } from "./../business/UserBusiness"
import { userDTO } from "./../models/User"

export class UserController {

    async create(req: Request, res: Response) {
        try {
            const { name, email, password, role } = req.body

            const userBussines = new UserBusiness()

            const user:userDTO = {
                name,
                email,
                password,
                role
            }

            const token =  await userBussines.create(user)

            res.status(201).send({ message:token })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }

    async login(req: Request, res: Response){
        try {
            const { email,password} = req.body

            const userBussines = new UserBusiness()

            const token =  await userBussines.login(email,password)

            res.status(201).send({ message:token })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }

    async getProfile(req: Request, res: Response){
        try {
            const tokenUser = req.headers.authorization as string

            const userBussines = new UserBusiness()
            
            const userProfile =  await userBussines.getProfile(tokenUser)

            res.status(201).send({ User:userProfile })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }


    async deleteUser(req: Request, res: Response){
        try {

            const tokenUser = req.headers.authorization as string
             console.log(tokenUser)
            const userBussines = new UserBusiness()
            
            const userProfile =  await userBussines.deleteUser(tokenUser)

            res.status(201).send({ message: `Usuário deletado com sucesso !` })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }

}