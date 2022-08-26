import {connection} from './baseDataBase'


export default async function getLength(){

    const result = await connection("User_To_Do_List").select("*")
      return result.length
    
}
