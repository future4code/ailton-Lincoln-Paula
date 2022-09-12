import {Request, Response} from 'express'
import {getPurchasesData} from './../data/getPurchasesData'

export async function getAllPurchases(req:Request, res:Response):Promise<void>{

    try {   
     
     const userId = String(req.params.user_id)

     
     if(userId === ":user_id"){
        res.statusCode = 400
        throw new Error(`Passe um id válido ! `)
     }

     const result = await getPurchasesData(userId)
     
     if(result.productInfo.length === 0){
        res.statusCode = 400
        throw new Error(`Usuário não encontrado ! `)
     }
    
    res.status(200).send(result)

    } catch (error:any) {
        
        res.status(res.statusCode || 500).send({message:error.message})

    }


}