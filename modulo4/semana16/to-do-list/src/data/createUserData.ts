import {connection} from './../data/baseDataBase'


export default async function createUserData(id:string,name:string,nickname:string,email:string){

    // const result = await connection("User_To_Do_List")
     const resultRAW = await connection.raw(`
        INSERT INTO User_To_Do_List (id,name,nickname,email)
        VALUES ("${id}", "${name}", "${nickname}", "${email}");
    `)

       return resultRAW

}