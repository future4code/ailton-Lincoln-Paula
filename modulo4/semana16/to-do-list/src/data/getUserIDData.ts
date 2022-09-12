import {connection} from './../data/baseDataBase'


export default async function  getUserIDData(id:string){

   const result = await connection.raw(`
    SELECT * FROM User_To_Do_List WHERE id = "${id}"
   
   `)

    return result[0][0]

}