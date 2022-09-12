import { connection } from "./connection"

export async function getPriceData(productId:string):Promise<any>{

    try {

        const products = await connection.raw(`
            
         SELECT price FROM labecommerce_products WHERE id = "${productId}"
        
        `)
    
        return products[0][0].price
        
    
        
    } catch (error:any) {
        
          console.log(error.message)
    
    }



}