import { Request, Response } from "express";
import { MissingFields } from "../error/MissingFields";
import User from "../model/User";
import { UserDatabase } from "../data/UserDatabase";
import Authenticator from "../services/Authenticator";
import GenerateId from "../services/GenerateId";

class UserEndpoint {

    public async createUser(req: Request, res: Response) {
        try {
            const { name, nickname, email, password } = req.body
            
            if (!name || !nickname || !email || !password) {
                throw new MissingFields()
            }

            if (!email || email.indexOf("@") === -1) {
                res.statusCode = 400
                throw new Error("Invalid email")
            }

            if (!req.body.password || req.body.password.length < 6) {
                throw new Error("Invalid password");
              }
            
              const userDataBase = new UserDatabase()

            const EmailExist = await userDataBase.getUserByEmail(email)

            if(EmailExist){
                res.statusCode = 400
                throw new Error(`Email existing in database`)
            }

            const id = new GenerateId().createId();
            const user = new User(id, name, nickname, email, password)

            await userDataBase.createUser(user)


            const token = new Authenticator().generateToken(id)

            res.status(201).send({ message: "Token gerado pelo jwt", token })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }

    async login(req: Request, res: Response) {
        try {

            const { email, password } = req.body

            if (!email || !password) {
                throw new MissingFields()
            }


            if (!email || email.indexOf("@") === -1) {
                res.statusCode = 400
                throw new Error("Invalid email")
            }

            const userData = new UserDatabase()

            const senhaCorreta = await userData.getUserByPassword(password)

           if(senhaCorreta.length === 0){
            res.statusCode = 400
            throw new Error("Invalid password")
           }
           
            // const EmailExist = await userData.getUserByEmail(email)

            const token = new Authenticator().generateToken(senhaCorreta[0].id)

            res.status(200).send({ token })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }

    public async infoUser(req: Request, res: Response){
           try {
        // const token = req.headers.authorization as string
        const token = req.headers.authorization!

        const id = new Authenticator().verifyToken(token)

        const userData = new UserDatabase()

        const userInfo = await userData.getUserById(id)


        res.status(200).send({message: `Info user`, data: userInfo})

    } catch (error: any) {
        res.status(error.statusCode || 500).send({ message: error.message })
    }

    }

    async editUser(req: Request, res: Response) {
        try {
            // const token = req.headers.authorization as string
            const token = req.headers.authorization!
            const { nickname } = req.body

            const id = new Authenticator().verifyToken(token)

            const userData = new UserDatabase()

            await userData.edit(id,nickname)

            res.status(200).send("Atualizado com sucesso!")

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }
}

export default UserEndpoint



