import { Request, Response } from "express"
import {getPriceData} from './../data/getPriceData'
import {Purchase} from './../types/typeProduct'
import {insertPurchase} from './../data/insertPurchase'

export async function createPurchases(req: Request,res: Response): Promise<void> {

   try {

      const {user_id,product_id,quantity} = req.body

      if(!user_id ||!product_id || !quantity){
         res.statusCode = 400
         throw new Error(`Passe corretamente os valores !`)
      }
      if(typeof user_id != "string"){
         res.statusCode = 400
         throw new Error(`O valor de user_id, deve ser do tipo string`)
      }
      if(typeof product_id != "string"){
         res.statusCode = 400
         throw new Error(`O valor de product_id, deve ser do tipo string`)
      }
      if(typeof quantity != "number"){
         res.statusCode = 400
         throw new Error(`O valor de quantity, deve ser do tipo number`)
      }
      
      const price:number = await getPriceData(product_id)
      const total:number = price*quantity

         const newPurchase:Purchase = {
          id: String(Date.now()),
          user_id: user_id,
          product_id: product_id,
          quantity: quantity,
          total_price: total,
          }

        const register = await insertPurchase(newPurchase)
        
        
        res.status(200).send(`Compra no total de ${total}, registrada !`)

   } catch (error:any) {
      res.status(res.statusCode || 500).send({message:error.message})
   }
}
