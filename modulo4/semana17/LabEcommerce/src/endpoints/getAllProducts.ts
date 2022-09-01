import getAllProductsData from './../data/getAllProductsData'
import {Request, Response} from 'express'

export async function getAllProducts(req:Request, res:Response):Promise<void>{

    try {   
     
      const products =  await getAllProductsData()
    
      res.status(200).send({message: 'Aqui estão todos produtos', data:products})
        
    } catch (error:any) {
        
        res.status(res.statusCode || 500).send({message:error.message})

    }


}