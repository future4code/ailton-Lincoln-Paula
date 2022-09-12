import { Request, Response } from "express"
import getAdressData from './../data/getAdressData'
import {adress} from './../types'

export async function getAdress(req: Request,res: Response): Promise<void> {
   try {
      const cep = String(req.params.cep)


      if(!cep){
         res.statusCode = 404
         throw new Error(`Passe um número correto !`)
      }

      if(typeof cep != "string"){
         res.statusCode = 404
         throw new Error(`O cep precisa ser uma string !`)
      }


      const result = await getAdressData(cep)

      // const adress:adress = {
      //    Logradouro: result.logradouro,
      //    Bairro:  result.bairro,
      //    Cidade:  result.localidade,
      //    Estado: result.uf
      // }

      res.status(200).send({message:`Usuário cadastrado com sucesso !`})

   } catch (error:any) {
      res.status(res.statusCode || 500).send({message:error.message})
   }
}


