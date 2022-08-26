import { connection } from "./baseDataBase";

export default async function  editUserNicknameData(id:string, nickname:string){
// console.log('chegou',id,nickname)

const result = await connection.raw(`

      UPDATE User_To_Do_List SET nickname = "${nickname}" WHERE id = "${id}"; 
      
      `)

      

}