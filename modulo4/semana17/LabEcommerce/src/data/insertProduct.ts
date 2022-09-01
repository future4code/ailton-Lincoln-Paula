import { Produtc } from "../types/typeProduct"
import { connection } from "./connection"


export default async function insertProduct(product:Produtc):Promise<any> {
    
try {
       
      const products = await connection.raw(`
            
      INSERT INTO labecommerce_products (id, name, price, image_url) 
        VALUES("${product.id}", "${product.name}", ${product.price}, "${product.image_url}")
      
      `)

       console.log(products[0])

    
} catch (error:any) {
    
      console.log(error.message)

}


}