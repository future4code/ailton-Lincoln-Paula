import {connection} from '../connection'

export default async function selectUserOrder(name:string,type:string,order:string):Promise<any> {
    const result = await connection.raw(`
       SSELECT * FROM aula48_exercicio WHERE
        name LIKE "${name}" AND 
        type = "${type}"
        ORDER BY name ${order};
    `)
 
    return result[0]

 }


