import { Request, Response } from "express";
import { MissingFields } from "../error/MissingFields";
import User from "../model/User";
import { UserDatabase } from "../data/UserDatabase";
import Authenticator, {typeUser} from "../services/Authenticator";
import GenerateId from "../services/GenerateId";
import { HashManager } from "./../services/HashManager"

class UserEndpoint {

    public async createUser(req: Request, res: Response) {
        try {
            const { name, nickname, email, password, role } = req.body
            
            if (!name || !nickname || !email || !password || !role) {
                throw new MissingFields()
            }

            if(role.toUpperCase() !== typeUser.ADMIN && role.toUpperCase() !== typeUser.NORMAL){
                throw new Error("Tipo de usuario invalido")
            }

            if (!email || email.indexOf("@") === -1) {
                res.statusCode = 400
                throw new Error("Invalid email")
            }

            if (!req.body.password || req.body.password.length < 6) {
                throw new Error("Invalid password");
              }
            
            const userDataBase = new UserDatabase()
            const Hash = new HashManager()

            const EmailExist = await userDataBase.getUserByEmail(email)

            if(EmailExist){
                res.statusCode = 400
                throw new Error(`Email existing in database`)
            }

            const passCript = await Hash.generateHash(password)

            // const compareCript = await Hash.compare(password, passCript)
            // console.log(compareCript)

            const id = new GenerateId().createId();
            const user = new User(id, name, nickname, email, passCript, role)

            await userDataBase.createUser(user)

            const token = new Authenticator().generateToken({id,role})

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

            const emailExist = await userData.getUserByEmail(email)

            if (!emailExist) {
                throw new Error(`Invalid Credencial`);
            }


        const correctPassword = await new HashManager().compare(password, emailExist.getPassword())


           if(!correctPassword){
            res.statusCode = 400
            throw new Error("Invalid password") 
           }


        const token = new Authenticator().generateToken({id: emailExist.getId(), role: emailExist.getRole()})

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

        
        if(id.role.toUpperCase() !== typeUser.NORMAL){
            throw new Error(`Endpoint pode ser acessado somente por pessoa não administradoras`)
        }

        const userInfo = await userData.getUserById(id.id)
        

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

            await userData.edit(id.id,nickname)

            res.status(200).send("Atualizado com sucesso!")

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }
}

export default UserEndpoint



