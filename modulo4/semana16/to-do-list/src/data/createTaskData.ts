import {connection} from './../data/baseDataBase'


export default async function createTaskData(id:string,title:string,descripction:string,limitDate:string,creatorUserId:string){

     const resultRAW = await connection.raw(`
     INSERT INTO TodoListTask (id,title,description,limit_date,creator_user_id)
     VALUES ("${id}","${title}","${descripction}","${limitDate}","${creatorUserId}");
    `)

}