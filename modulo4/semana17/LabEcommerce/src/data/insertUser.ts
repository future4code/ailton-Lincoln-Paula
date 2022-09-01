import { User } from "../types/typeUser";
import { connection } from "./connection";

export default async function insertUser(body:User):Promise<any>{

    try {
        await connection.raw(`
        INSERT INTO labecommerce_users (id, name, email, password) 
        VALUES("${body.id}", "${body.name}", "${body.email}", "${body.password}")
        `)
        
    } catch (error:any) {

        console.log(error.message)

    }
}