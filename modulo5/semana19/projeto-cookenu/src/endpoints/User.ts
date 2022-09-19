import { Request, Response } from "express";
import { MissingFields } from "../error/MissingFields";
import User from "../model/User";
import { UserDatabase } from "../data/UserDatabase";
import Authenticator from "../services/Authenticator";
import GenerateId from "../services/GenerateId";
import { HashManager } from "./../services/HashManager"


class UserEndpoint {

    public async createUser(req: Request, res: Response) {
        try {
            const { name, email, password} = req.body
            
            if (!name  || !email || !password) {

                throw new MissingFields()

            }

            // if(role.toUpperCase() !== typeUser.ADMIN && role.toUpperCase() !== typeUser.NORMAL){
            //     throw new Error("Tipo de usuario invalido")
            // }

            if (!email || email.indexOf("@") === -1) {
                res.statusCode = 400
                throw new Error("Email inválido, tente novamente")
            }

            if (!req.body.password || req.body.password.length < 6) {
                throw new Error("Insira uma senha que tenha pelo menos 6 caracteres");
              }
            
            const userDataBase = new UserDatabase()

            const Hash = new HashManager()

            const EmailExist = await userDataBase.getUserByEmail(email)

            if(EmailExist){
                res.statusCode = 400
                throw new Error(`Email já existente !`)
            }

            const passwordHash = await Hash.generateHash(password)
            const id = new GenerateId().createId();
            // const compareCript = await Hash.compare(password, passwordHash)

       
            const user = new User(id, name, email, passwordHash)

            await userDataBase.createUser(user)

            const token = new Authenticator().generateToken(id)

            res.status(201).send({message: `Usuário criado com sucesso !`, access_token: token})

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
                throw new Error("Email inválido")
            }

            const userData = new UserDatabase()

            const emailExist = await userData.getUserByEmail(email)

            if (!emailExist) {
                throw new Error(`Email inválido, tente novamente`);
            }


        const correctPassword = await new HashManager().compare(password, emailExist.getPassword())

           if(!correctPassword){
            res.statusCode = 400
            throw new Error("Senha incorreta, tente novamente !") 
           }


        const token = new Authenticator().generateToken(emailExist.getId())

        res.status(200).send({ token })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }

    public async infoUser(req: Request, res: Response){
           try {

        const token = req.headers.authorization!

        const userVerifyToken = new Authenticator().verifyToken(token)
        const userData = new UserDatabase()

        
        // if(id.role.toUpperCase() !== typeUser.NORMAL){
        //     throw new Error(`Endpoint pode ser acessado somente por pessoa não administradoras`)
        // }

        const userInfo = await userData.getUserById(userVerifyToken.id)


        if(!userInfo){

            throw new Error(`Id não encontrado no sistema ! `)

        }


        const infoUser = {
            id: userInfo.id,
            name: userInfo.name,
            email: userInfo.email
        }

        res.status(200).send({message: `Informações usuário`, data: infoUser})


    } catch (error: any) {
        res.status(error.statusCode || 500).send({ message: error.message })
    }

    }

    public async infoUsers(req: Request, res: Response){

        try {

            const idUser: string = String(req.params.id)
    
            const userData = new UserDatabase()
    
            
            // if(id.role.toUpperCase() !== typeUser.NORMAL){
            //     throw new Error(`Endpoint pode ser acessado somente por pessoa não administradoras`)
            // }
    
            const userInfo = await userData.getUserById(idUser)
            
            if(!userInfo){

                throw new Error(`Id não encontrado no sistema ! `)

            }

            const infoUser = {
                id: userInfo.id,
                name: userInfo.name,
                email: userInfo.email
            }
    
            res.status(200).send({message: `Informações usuário`, data: infoUser})
    
    
        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }



    }

    public async follow(req: Request, res: Response){

        try {

            const token: string = req.headers.authorization!
            const userFollow: string = req.body.userToFollowId
            const userData = new UserDatabase()
            const id = await new Authenticator().verifyToken(token)

           if(!token){
             res.statusCode = 404
            throw new Error(`O token do usuário deve ser passado ! `)
           }

           if(!userFollow){
             res.statusCode = 404
            throw new Error(`Deve ser passado o id do usuário a ser seguido !`)
           }   

           if(typeof userFollow !== "string" || typeof token !== "string"){
             res.statusCode = 404
            throw new Error(`Os dados passados devem ser do tipo string`)
           }   

           const userRequisition = await userData.getUserById(id.id)
           
           const result = await userData.followUser(userRequisition.id, userFollow )

           res.status(200).send({result})
    
        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }



    }

    public async unfollow(req: Request, res: Response){

        try {

            const token: string = req.headers.authorization!
            const userUnfollow: string = req.body.userToUnfollowId
            const userData = new UserDatabase()
            const id = await new Authenticator().verifyToken(token)

           if(!token){
             res.statusCode = 404
            throw new Error(`O token do usuário deve ser passado ! `)
           }

           if(!userUnfollow){
             res.statusCode = 404
            throw new Error(`Deve ser passado o id do usuário !`)
           }   

           if(typeof userUnfollow !== "string" || typeof token !== "string"){
             res.statusCode = 404
            throw new Error(`Os dados passados devem ser do tipo string`)
           }   

           const userRequisition = await userData.getUserById(id.id)
           
           const result = await userData.unfollowUser(userRequisition.id, userUnfollow )
           
           res.status(200).send({result})
    
        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }



    }

    public async recipeFollowers(req: Request, res: Response){
        try {
            const token: string = req.headers.authorization!
            const userData = new UserDatabase()
            if(!token){
                res.statusCode = 404
                throw new Error(`Passe um token, e tente novamente ! `)

            }

            const id :string = await new Authenticator().verifyToken(token)

            const feedResult = await userData.getRecipeFollowers(id)

        //    if(!recipeResult.length){
        //     throw new Error(`Receita não encontrada, verifique o id, e tente novamente !`)
        //    }

        //    res.status(200).send({message: `Aqui está a receita`, data: recipeResult})


        } catch (error: any) {
            res.status(res.statusCode || 500).send({message: error.message})
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



