import { Request, Response } from "express"
import insertProduct from '../data/insertProduct'
import { Produtc } from "../types/typeProduct"

export async function createProduct(req: Request,res: Response): Promise<void> {

   try {

      const product = req.body
     
      if(!product.name || !product.price || !product.image_url){
        res.statusCode = 400
        throw new Error(`Dados indefinidos, verifique seus dados novamente !`)
     }

     if(typeof product.name != "string" || typeof product.price != "number" || typeof product.image_url != "string"){
        res.statusCode = 400
        throw new Error(`Verifique o tipo dos dados !`)
     }

     const newProduct:Produtc = {

        id: String(Math.floor(Math.random() * 100)),
        name: product.name,
        price: product.price,
        image_url: product.image_url

     }

     await insertProduct(newProduct)


     res.status(201).send(`Produto ${product.name} inserido na tabela !`)

   } catch (error:any) {
      res.status(res.statusCode || 500).send({message:error.message})
   }
}
