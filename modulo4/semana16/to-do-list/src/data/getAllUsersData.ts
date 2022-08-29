import {connection} from './baseDataBase'


export default async function getAllUsersData(){

     const result = await connection.raw(`

     SELECT * FROM User_To_Do_List;

     
     `)

      return result[0]

    
}

