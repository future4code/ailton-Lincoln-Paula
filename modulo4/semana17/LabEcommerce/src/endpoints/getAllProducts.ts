import getAllProductsData from './../data/getAllProductsData'
import {Request, Response} from 'express'

export async function getAllProducts(req:Request, res:Response):Promise<void>{

    try {   
      
      let search = String(req.query.search)
      let order = String(req.query.order)

      if(!search){

        search = ""

      }

      if(!order){

        search = "ASC"

      }

      const products =  await getAllProductsData(search, order.toLocaleUpperCase())


      if(products.length === 0){
        res.statusCode = 400
        throw new Error(`Produto não encontrado !`)
  
        }

      res.status(200).send({message: 'Aqui estão todos produtos', data:products})
        
    } catch (error:any) {
        
        res.status(res.statusCode || 500).send({message:error.message})

    }


}