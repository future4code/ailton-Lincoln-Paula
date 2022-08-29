import {connection} from './../data/baseDataBase'


export default async function  getUserIDData(name:string){

   const result = await connection.raw(`
   select * from User_To_Do_List WHERE name LIKE "%${name}%" OR nickname LIKE "%${name}%";
   
   `)

   return result[0]

}