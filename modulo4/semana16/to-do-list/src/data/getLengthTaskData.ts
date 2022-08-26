import {connection} from './baseDataBase'


export default async function getLengthTaskData(){

    const result = await connection("TodoListTask").select("*")
      return result.length
    
}
