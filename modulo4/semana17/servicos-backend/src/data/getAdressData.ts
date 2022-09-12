import axios from 'axios'
import {connection} from './connection'

export default async function getAdressData(cep:string):Promise<any>{
    try {

    const consult = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    
     const insert = await connection.raw(`
      INSERT INTO Adress (CEP, Logradouro, Numero, Complemento, Bairro, Cidade, Estado) 
     VALUES ('${consult.data.cep}','${consult.data.logradouro}',
    '${consult.data.ddd}','${consult.data.complemento}', '${consult.data.bairro}',
    '${consult.data.localidade}','${consult.data.uf}');
    `)

    

    } catch (error:any) {
       
     return null 

    }
  
}   