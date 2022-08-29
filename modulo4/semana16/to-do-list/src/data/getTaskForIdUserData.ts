import {connection} from './baseDataBase'


export default async function getTaskForIdUserData(id:string){

    const result = await connection.raw(`
    
    SELECT * FROM User_To_Do_List 
    INNER JOIN TodoListTask ON User_To_Do_List.id = TodoListTask.id WHERE User_To_Do_List.id = "${id}";
    
    `)
    return result[0]
}
