import { connection } from "./connection"


export default async function getAllUsersData():Promise<any> {
    
try {

    const users = await connection.raw(`
        
     SELECT * FROM labecommerce_users 
    
    `)

     return users[0]

    
} catch (error:any) {
    
      console.log(error.message)

}


}