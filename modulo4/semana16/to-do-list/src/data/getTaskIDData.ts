import {connection} from './../data/baseDataBase'


export default async function  getUserIDData(id:string){

   const result = await connection.raw(`
    SELECT * FROM TodoListTask WHERE id = "${id}"
   
   `)

    return result[0][0]

}