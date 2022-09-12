import User from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

    public async createUser(user: User) {

        await this.getConnection().raw(`
        
        INSERT INTO aula_intro_aut_user (id, name, nickname, email, password)  VALUES 
        ("${user.getId()}", "${user.getName()}", "${user.getNickName()}", "${user.getEmail()}", "${user.getPassword()}")
        
        `)
        
        // insert({
        //     id: user.getId(),
        //     name: user.getName(),
        //     nickname: user.getNickName(),
        //     email: user.getEmail(),
        //     password: user.getPassword()
        // }).into("aula_intro_aut_user")
    }

    public async edit(id: string, nickname: string) {
        await this.getConnection().update({ nickname }).into("aula_intro_aut_user").where({ id })
    }

    public async getUserByEmail(email: string) {
        const result = await this.getConnection()
            .select("*")
            .from("aula_intro_aut_user")
            .where({ email: email })

        return result[0]
    }

    public async getUserByPassword(senha: string) {
        const result = await this.getConnection()
            .select("*")
            .from("aula_intro_aut_user")
            .where({ password: senha })

        return result
    }

    public async getUserById(id: string) {
        const result = await this.getConnection()
            .select("*")
            .from("aula_intro_aut_user")
            .where({id})

        return result
    }

}
