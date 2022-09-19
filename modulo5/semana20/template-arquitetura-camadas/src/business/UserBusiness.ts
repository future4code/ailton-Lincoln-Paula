import { UserDatabase } from "../database/UserDatabase";
import { MissingFields } from "../error/MissingFields";
import { TokenNotPass } from "../error/TokenNotPass";
import { User, UserBD, userDTO, USER_ROLES } from "./../models/User";
import {Authenticator} from "../services/Authenticator";
import {HashManager} from "../services/HashManager";
import {IdGenerator} from "../services/IdGenerator";


export class UserBusiness {

    async create(userDTO: userDTO):Promise<string> {

        const { name, email, password, role } = userDTO

        if (!name || !email || !password || !role) {
            throw new MissingFields()
        }

        if (password.length < 6) {
            throw new Error("A senha deve conter no minimo 6 caracteres")
        }

        if (role.toUpperCase() !== USER_ROLES.NORMAL && role.toUpperCase() !== USER_ROLES.ADMIN) {
            throw new Error("Usuario só pode ser do tipo normal ou admin")
        }

        const userData = new UserDatabase()

        const emailAlreadyExit = await userData.getUserByEmail(email)

        if (emailAlreadyExit) {
            throw new Error("Email ja cadastrado")
        }

        // -------------------------------- // 

        const id = new IdGenerator().generate();

        const hashPassword = await new HashManager().hash(password)

        const user = new User(id, name, email, hashPassword, role)

        const response = await userData.createUser(user)

        const token = new Authenticator().generateToken({ id, role })

        return token

    }

    async login(email:string,password:string):Promise<string>{

        if (!email || !password) {
            
            throw new MissingFields()
        }
        
        const userData = new UserDatabase()
        
        const userDB = await userData.getUserByEmail(email)

        if (!userDB) {
            throw new Error("Email não cadastrado na aplicação")
        }

        const correctPassword = await new HashManager().compare(password, userDB.getPassword())

        if (!correctPassword) {
            throw new Error("A senha esta incorreta")
        }

        const token = new Authenticator().generateToken({ id: userDB.getId(), role: userDB.getRole() })

        return token
    }

    async getProfile(token:string):Promise<UserBD>{

        if (!token) {
            throw new TokenNotPass()
        }

        const userToken = new Authenticator().getTokenPayload(token)

        const userData = new UserDatabase()

        const result = await userData.getUserById(userToken.id)

        if (!result.length) {
           throw new Error("Usuario não existe")
        }
        
        const usersMap = result.map((users: any) =>{

            const user: UserBD = {
                id: users.id,
                nome: users.name,
                email: users.email
            }

            return user
        })

        return usersMap
    }

    async deleteUser(token:string):Promise<any>{

        if (!token) {
            throw new TokenNotPass()
        }

        const userToken = new Authenticator().getTokenPayload(token)

        const userData = new UserDatabase()

        const result = await userData.getUserById(userToken.id)

        if (!result.length) {
           throw new Error("Usuario não existe")
        }
        
        const deletarUser = await userData.deleteUserData(userToken.id)
    }


}